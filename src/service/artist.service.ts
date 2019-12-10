import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of } from 'rxjs';
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



  constructor(private http: HttpClient) { }



  createArtist(firstName: string, lastName: string, password: string, email: string, role: string){
    const artist: Artist = { firstName: firstName, lastName: lastName,  password: password, email: email, role: role}
    return this.http.post<any>(this.artistUrl+ '/register', artist)
  }

  loginArtist(password: string, email: string){
    const artist = { password: password, email: email }
    return this.http.post<any>(this.artistUrl+ '/login', artist)
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


  // updateArtist (artistId){
  //   console.log(this.artistUrl)
  //   return this.http.put<Artist[]>(this.artistUrl + '/delete' + `/${artistId}`).subscribe(()=> {
  //     console.log("Updated")
  //   })
  // }

}
