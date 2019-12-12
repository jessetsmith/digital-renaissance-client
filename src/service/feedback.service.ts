import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = 'http://dr-server.herokuapp.com/feedback';

  // private feedbackUrl = 'http://localhost:3000/feedback/';

  constructor( private http: HttpClient, private router: Router ) { }

 

  createFeedback(id,  rating: number, comment: string, type: string,  skillId: number ) {
    
    const feedback: Feedback = { rating: rating, comment: comment,  type: type, skillId: skillId }
    const token = localStorage.getItem('token');
    return this.http.post<any>(this.feedbackUrl + '/create' + `/${id}`, feedback, { headers: {'Authorization': token}})

  }

  getFeedback(id): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.feedbackUrl + `/${id}`)
    .pipe(map(data => data))
  }

  deleteFeedback(id){
    const token = localStorage.getItem('token');
     return this.http.delete<Feedback[]>(this.feedbackUrl + '/delete' + `/${id}`, { headers: {'Authorization': token}})
    .subscribe(()=> {
      // this.getArtists();
      
    })
  }

  updateFeedback (id, feedback){
    const token = localStorage.getItem('token');
     return this.http.put(this.feedbackUrl + '/delete' + `/${id}`, feedback, { headers: {'Authorization': token}}).pipe(
       tap(_=> console.log(`updated feedback ${id}`))
     )
  }



  // updateTodo (id, todo): Observable<any> {
  //   const url = `${apiUrl}/update.php?id=${id}`;
  //   return this.http.put(url, todo, httpOptions).pipe(
  //     tap(_ => console.log(`updated todo id=${id}`))
  //   );
  // }

}
