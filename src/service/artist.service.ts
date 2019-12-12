import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArtistService {
//HEROKU URL
private artistUrl = 'http://dr-server.herokuapp.com/artist';

private token: string;
private artistInfo = [];
private authStatusListener = new Subject<boolean>()
  artistProfile: any;
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
    const artist: Artist = { firstName: firstName, lastName: lastName,  password: password, email: email, role: role}
    return this.http.post<any>(this.artistUrl+ '/register', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      const artistInfo = response.artist;
      this.token = token;
      this.artistInfo = artistInfo;
      console.log(token);
      console.log(response);
      this.saveAuthData(token, artistInfo);
      this.artistInfo = artistInfo;
      this.authStatusListener.next(true);
      this.router.navigate(["/artists"])
    })
  }

  setArtistProfile () {
    this.artistProfile = this.artistInfo;
    console.log(this.artistProfile);
  }

  loginArtist(password: string, email: string){
    const artist = { password: password, email: email }
    this.http.post<any>(this.artistUrl+ '/login', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      const artistInfo = response.artist;
      this.token = token;
      console.log(response);
      console.log(token);
      this.saveAuthData(token, artistInfo);
      this.artistInfo = artistInfo;
      console.log(token)
      console.log(response)
      this.saveAuthData(token, response);
      this.authStatusListener.next(true);
      this.router.navigate(["/artists"])
    })
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


  // private _getProfile(authResult, artistId) {
  //   this.loggingIn = true;
  //   // Use access token to retrieve user's profile and set session
  //   this.http.get<Artist[]>(this.artistUrl + `/${artistId}`)(authResult.accessToken, (err, profile) => {
  //     if (profile) {
  //       this.isAdmin = this._checkAdmin(profile);
  //       this._setSession(authResult, profile);
  //     } else if (err) {
  //       console.warn(`Error retrieving profile: ${err.error}`);
  //     }
  //   });
  // }

  // private _checkAdmin(profile) {
  //   // Check if the user has admin role
  //   const roles = profile[this.artistProfile.role] || [];
  //   return roles.indexOf('admin') > -1;
  // }


  // setLoggedIn(value: boolean) {
  //   // Update login status subject
  //   this.loggedIn$.next(value);
  //   this.loggedIn = value;
  // }

  // private _setSession(authResult, profile?) {
  //   this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
  //   // Store expiration in local storage to access in constructor
  //   localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
  //   this.token = authResult.sessionToken;
  //   this.artistProfile = profile;
  //   console.log(profile);
  //   this.setLoggedIn(true);
  //   this.artistProfile(profile);
  //   this.loggingIn = false;
  //   this.router.navigate(['/artists']);

  // }

  private clearAuthData(){
    localStorage.removeItem("token");
  }
}
