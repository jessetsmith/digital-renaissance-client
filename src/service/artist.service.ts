import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { APIURL } from '../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ArtistService {
//HEROKU URL
private artistUrl = `${APIURL}/artist`;
private token: string;
private artistInfo = [];
private authStatusListener = new Subject<boolean>()
  artistProfile: any;
  artistProfile$: any;
  expiresAt: number;
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggingIn: boolean;
  isAdmin: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  
  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  getToken() {
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
}

  createArtist(firstName: string, lastName: string, password: string, email: string, role: string){
    const artist: Artist = {firstName: firstName, lastName: lastName,  password: password, email: email, role: role }
    return this.http.post<any>(this.artistUrl+ '/register', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      const artistInfo = response.artist;
      this.token = token;
      this.artistInfo = artistInfo;
      console.log(token);
      console.log(response);
      this.setLoggedIn(true);
      this.saveAuthData(token, artistInfo);
      this.artistInfo = artistInfo;
      this.authStatusListener.next(true);
      this.router.navigate(["/artists"])
    })
  }

  loginArtist(password: string, email: string){
    const artist = { password: password, email: email }
    this.http.post<any>(this.artistUrl+ '/login', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      const artistInfo = response.artist;
      this.token = token;
      this.setLoggedIn(true);
      this.saveAuthData(token, artistInfo);
      this.artistInfo = artistInfo;
      // info = this.artistInfo;
      console.log(token)
      console.log(response)
      this.saveAuthData(token, response);
      this.authStatusListener.next(true);
      this.router.navigate(["/artists"])
      // this._setSession(response, info);
    })
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  setArtistProfile(value: any) {
    value = localStorage.getItem('artistInfo');
    return this.artistProfile = value;
    console.log(this.artistProfile);
  }

  // checkAdmin() {
  //   if(JSON.parse(localStorage.getItem('artistInfo')).role == 'admin'){
  //     return true;
  //   }
  //   return false;
  // }

  private _setSession(response, info) {
    this.expiresAt = (response.expiresIn * 1000) + Date.now();
    // Store expiration in local storage to access in constructor
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    info = localStorage.getItem('artistInfo');
    this.token = response.sessionToken;
    // this.artistProfile = info;
    // console.log(this.artistProfile);
    this.setLoggedIn(true);
    this.loggingIn = false;
    this.router.navigate(['/artists']);
    // return this.artistProfile;
  }

  getArtists (): Observable<Artist[]>{
    console.log(this.artistUrl + '/getartists')
    return this.http.get<Artist[]>(this.artistUrl + '/getartists')
    .pipe(map(id => id))
  }

  getArtist (artistId): Observable<Artist[]>{
    console.log(this.artistUrl)
    return this.http.get<Artist[]>(this.artistUrl + `/${artistId}`)
  }

  deleteArtist (artistId){
    const token = localStorage.getItem('token');
     return this.http.delete<Artist[]>(this.artistUrl + '/delete' + `/${artistId}`, { headers: {'Authorization': token}})
    .subscribe(()=> {
      // this.getArtists();
      this.router.navigate(["admin"])
    })
  }

  updateArtist (artistId, firstName: string, lastName: string, password: string, email: string, role: string){
    const artist = { firstName: firstName, lastName: lastName,  password: password, email: email, role: role}
   
    return this.http.put(this.artistUrl + '/update' + `/${artistId}`, artist, { headers: {'Authorization': localStorage.getItem('token')}})
    .subscribe(()=> {
      this.router.navigate(["/"])
    })
  }

  private saveAuthData(token: string, artistInfo: string){
    localStorage.setItem('token', token);
    localStorage.setItem('artistInfo', JSON.stringify(artistInfo))
    // +localStorage.setItem('id', id )
  }

  private clearAuthData(){
    localStorage.removeItem("token");
  }
}
