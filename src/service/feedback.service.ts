import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = `${APIURL}/feedback`;

  // private feedbackUrl = 'http://localhost:3000/feedback/';

  constructor( private http: HttpClient, private router: Router ) { }

 

  // createFeedback(id,  rating: number, comment: string, type: string,  skillId: number ) {
    
  //   const feedback: Feedback = { rating: rating, comment: comment,  type: type, skillId: skillId }
  //   const token = localStorage.getItem('token');
  //   return this.http.post<any>(this.feedbackUrl + '/create' + `/${id}`, feedback, { headers: {'Authorization': token}})

  // }

  getFeedback(id: any): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.feedbackUrl + `/${id}`)
    .pipe(tap(data => console.log(data, `fetched post by id=${id}`)))
  }

  deleteFeedback(id: any): Observable<Feedback> {
    const token = localStorage.getItem('token');
    const url = `${this.feedbackUrl}/delete/${id}`;
    return this.http.delete<Feedback>(url, { headers: {'Authorization': token}}).pipe(
      tap(_ => console.log(`deleted category id=${id}`))
    );
  }

  // updateFeedback (id, rating: number, comment: string, type: string,  skillId: number){
  //   const feedback: Feedback = { rating: rating, comment: comment,  type: type, skillId: skillId }
  //   const token = localStorage.getItem('token');
  //    return this.http.put(this.feedbackUrl + '/delete' + `/${id}`, feedback, { headers: {'Authorization': token}}).pipe(
  //      tap(_=> console.log(`updated feedback ${id}`))
  //    )
  // }


  // getFeedback(id: any): Observable<Feedback> {
  //   const url = `${this.feedbackUrl}/${id}`;
  //   return this.http.get<Feedback>(url).pipe(
  //     tap(_ => console.log(`fetched post by id=${id}`))
  //   );
  // }

  createFeedback(id, feedback: Feedback): Observable<Feedback> {
    const token = localStorage.getItem('token');
    return this.http.post<Feedback>(this.feedbackUrl + '/create' + `/${id}`, feedback, { headers: {'Authorization': token}}).pipe(
      // tap((prod: Feedback) => console.log(`added post w/ id=${feedback.id}`))
    );
  }

  updateFeedback(id: any, feedback: Feedback): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.feedbackUrl}/adminupdate/${id}`;
    return this.http.put(url, feedback, { headers: {'Authorization': token}}).pipe(
      tap(_ => console.log(`updated post id=${id}`))
    );
  }

}
