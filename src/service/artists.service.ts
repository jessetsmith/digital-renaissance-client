import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artistsUrl = 'http://dr-server.herokuapp.com/artist/getartists'
  constructor(private http: HttpClient) { }

  getArtists (): Observable<Artist[]>{
    console.log(this.artistsUrl)
    return this.http.get<Artist[]>(this.artistsUrl)
    .pipe(map(id => id))
  }

}
