import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
private artistUrl = 'http://dr-server.herokuapp.com/artist'

  constructor(private http: HttpClient) { }

  getArtist (artistId): Observable<Artist[]>{
    console.log(this.artistUrl)
    return this.http.get<Artist[]>(this.artistUrl + `/${artistId}`)
  }

}
