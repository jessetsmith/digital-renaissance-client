import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = 'http://dr-server.herokuapp.com/feedback';

  // private feedbackUrl = 'http://localhost:3000/feedback/';

  constructor( private http: HttpClient ) { }

 

  createFeedback(id,  rating: number, comment: string, type: string,  skillId: number ) {
    
    const feedback: Feedback = { rating: rating, comment: comment,  type: type, skillId: skillId }
    const token = localStorage.getItem('token');
    return this.http.post<any>(this.feedbackUrl + '/create' + `/${id}`, feedback, { headers: {'Authorization': token}})

  }

  getFeedback(id): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.feedbackUrl + `/${id}`)
    .pipe(map(data => data))
  }

  // deleteComment (id){
  //   const token = localStorage.getItem('token');
  //    return this.http.delete<Artist[]>(this.artistUrl + '/delete' + `/${artistId}`, { headers: {'Authorization': token}})
  //   .subscribe(()=> {
  //     // this.getArtists();
  //     this.router.navigate(["admin"])
  //   })
  // }

}
