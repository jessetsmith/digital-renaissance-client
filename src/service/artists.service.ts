import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Artist} from '../models/artist';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private artistsUrl = 'http://dr-server.herokuapp.com/artist/getartists';

  private createArtistUrl ='http://dr-server.herokuapp.com/artist/register'

  constructor(private http: HttpClient) { }

  // getArtists (): Observable<Artist[]>{
  //   return this.http.get<Artist[]>(this.artistsUrl)
  //   .pipe(map(id => id))
  // }
}
