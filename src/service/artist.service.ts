import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
//HEROKU URL
private artistUrl = 'http://dr-server.herokuapp.com/artist';

private token: string;
private authStatusListener = new Subject<boolean>()


  constructor(
    private http: HttpClient,
    private router: Router
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
      this.token = token;
      console.log(token)
      this.saveAuthData(token)
      this.router.navigate(["artists"])
    })
  }

  loginArtist(password: string, email: string){
    const artist = { password: password, email: email }
    this.http.post<any>(this.artistUrl+ '/login', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      this.token = token;
      console.log(token)
      this.saveAuthData(token)
      this.authStatusListener.next(true);
      this.router.navigate(["artists"])
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


  private saveAuthData(token: string){
    localStorage.setItem('token', token);
  }

  private clearAuthData(){
    localStorage.removeItem("token");
  }
}
