import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
//HEROKU URL
private artistUrl = 'http://dr-server.herokuapp.com/artist';

// LOCAL URL
// private artistsUrl = 'http://localhost:3000/artist/
// private artistUrl = 'http://dr-server.herokuapp.com/artist'

private token: string;
private artistInfo = [];
private authStatusListener = new Subject<boolean>()


  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
}

  createArtist(firstName: string, lastName: string, password: string, email: string, role: string){
    const artist: Artist = { firstName: firstName, lastName: lastName,  password: password, email: email, role: role}
    return this.http.post<any>(this.artistUrl+ '/register', artist)
  }

  loginArtist(password: string, email: string){
    const artist = { password: password, email: email }
    this.http.post<any>(this.artistUrl+ '/login', artist)
    .subscribe(response => {
      const token = response.sessionToken;
      const artistInfo = response.artist;
      this.token = token;
      this.artistInfo = artistInfo;
      console.log(token)
      console.log(response)
      this.saveAuthData(token, response);
      this.authStatusListener.next(true);
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
    console.log(this.artistUrl)
    return this.http.delete<Artist[]>(this.artistUrl + '/delete' + `/${artistId}`).subscribe(()=> {
      console.log("Deleted")
      this.getArtists();
      
    })
  }


  // updateArtist (artistId, firstName: string, lastName: string, password: string, email: string, role: string){
  //   const artist = { firstName: firstName, lastName: lastName,  password: password, email: email, role: role}
  //   return this.http.put(this.artistUrl + ‘/update’ + `/${artistId}`, artist, { headers: {‘Authorization’: localStorage.getItem(‘token’)}})
  //   .subscribe(()=> {
  //     this.router.navigate([“/”])
  //   })
  // }


  private saveAuthData(token: string, artistInfo: string){
    localStorage.setItem('token', token);
    localStorage.setItem('artistInfo', JSON.stringify(artistInfo))
    // +localStorage.setItem('id', id )
  }

  private clearAuthData(){
    localStorage.removeItem("token");
  }
}
