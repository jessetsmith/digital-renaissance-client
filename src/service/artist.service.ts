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
private artistUrl = 'http://dr-server.herokuapp.com/artist'

//LOCAL URL
// private artistUrl = 'http://localhost:3000/artist/getartists'

  constructor(private http: HttpClient) { }

  getArtist (artistId): Observable<Artist[]>{
    console.log(this.artistUrl)
    return this.http.get<Artist[]>(this.artistUrl + `/${artistId}`)
  }

  deleteArtist (artistId): Observable<Artist[]>{
    console.log(this.artistUrl)
    return this.http.get<Artist[]>(this.artistUrl + '/delete' + `/${artistId}`)
  }

}
