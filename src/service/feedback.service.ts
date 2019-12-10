import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // private feedbackUrl = 'http://dr-server.herokuapp.com/feedback/';

  private feedbackUrl = 'http://localhost:3000/feedback/';

  constructor( private http: HttpClient ) { }

  getFeedback (id): Observable<Feedback[]>{
    console.log(this.feedbackUrl)
    return this.http.get<Feedback[]>(this.feedbackUrl + `${id}`)
    .pipe(map(id => id))

  }



}
