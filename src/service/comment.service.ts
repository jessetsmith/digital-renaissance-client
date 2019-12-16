// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import {Comment} from '../models/comment';
// import { catchError, map, tap } from 'rxjs/operators';
// import { Router } from "@angular/router";
// import { ActivatedRoute, ParamMap } from '@angular/router';



// @Injectable({
//   providedIn: 'root'
// })
// export class CommentService {
//   constructor(
//     private http: HttpClient, 
//     private router: Router
//     ) { }


//   private commentUrl = 'http://dr-server.herokuapp.com/feedback';

//   private token: string;
//   private artistInfo = []; 


//   createComment(rating: number, comment: string, type: string, skillId: number){
//     const id = 1;
//     const commentObj: Comment = { rating: rating, comment: comment, type: type, skillId: skillId}
//     return this.http.post<any>(this.commentUrl+ '/create' + `${id}`, commentObj)
//     .subscribe(response => {
//       const token = response.sessionToken;
//       console.log(token);
//       console.log(response);
//       this.router.navigate(["/skill/getall"])
//     })
//   }

//   getComments(id): Observable<Comment[]> {
//     console.log(this.commentUrl + `/${id}`)
//     return this.http.get<Comment[]>(this.commentUrl + `/${id}`)
//     .pipe(map(data => data))
//   }
 
// }
