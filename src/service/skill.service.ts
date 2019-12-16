import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Skill} from '../models/skill';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  // token = localStorage.getItem('token');
  private skillUrl = `${APIURL}/skill`;
 

  constructor(private http: HttpClient) { }

  getSkills (): Observable<Skill[]>{
    console.log(this.skillUrl + '/getall')
    return this.http.get<Skill[]>(this.skillUrl + '/getall')
    .pipe(map(id => id))
  }

  getOneSkill (skillId): Observable<Skill[]>{
    console.log(this.skillUrl)
    return this.http.get<Skill[]>(this.skillUrl+`/${skillId}`)
  }


  getSkillsForOneArtist (artistId): Observable<Skill[]>{
    console.log(this.skillUrl)
    return this.http.get<Skill[]>(this.skillUrl+`/getall/${artistId}`)
  }

  createSkill(title: string, description: string, image: string, price: number, skillType: string, artistId: number ) {
    const skill: Skill = { title: title, description: description, image: image, price: price, skillType: skillType, artistId: artistId }
    const token = localStorage.getItem('token');
    return this.http.post<any>(this.skillUrl + '/create', skill, { headers: {'Authorization': token}})
  }

  deleteSkillProfile(deleteId, localToken):Observable<any>{
    console.log(localToken);
    console.log(deleteId);
    console.log(this.skillUrl+`/delete/${deleteId}`)
    return this.http.delete(this.skillUrl+`/delete/${deleteId}`,{ headers: new HttpHeaders( {'Authorization': localToken})})
  }


  updateSkill(id:any, skill: Skill): Observable<any> {
    const url = this.skillUrl+ `/updateskill/${id}`;
    const token = localStorage.getItem('token');
    return this.http.put(url, skill,{ headers: {'Authorization': token}} ).pipe(
      tap(_=> console.log(`updated post id=${id}`))
    )
  }
 
}






// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import {Skill} from '../models/skill';
// import { Observable } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
// // import { format } from 'path';

// @Injectable({
//   providedIn: 'root'
// })
// export class SkillService {

//   private skillUrl = "http://dr-server.herokuapp.com/skill";
 

//   constructor(private http: HttpClient) { }


//   getSkills (): Observable<Skill[]>{
//     console.log(this.skillUrl + '/getall')
//     return this.http.get<Skill[]>(this.skillUrl + '/getall')
//     .pipe(map(id => id))
//   }

//   getOneSkill (skillId): Observable<Skill[]>{
//     console.log(this.skillUrl)
//     return this.http.get<Skill[]>(this.skillUrl+`/${skillId}`)
//   }

//   getSkillsForOneArtist (artistId): Observable<Skill[]>{
//     console.log(this.skillUrl+`/getall/${artistId}`)
//     return this.http.get<Skill[]>(this.skillUrl+`/getall/${artistId}`)
//   }

//   createSkill(title: string, description: string, image: string, price: number, skillType: string, artistId: number ) {
//     const skill: Skill = { title: title, description: description, image: image, price: price, skillType: skillType, artistId: artistId }
//     const token = localStorage.getItem('token');
//     return this.http.post<any>(this.skillUrl + '/create', skill, { headers: {'Authorization': token}})
//   }


//   deleteSkillProfile(deleteId, localToken):Observable<any>{
//     console.log(localToken);
//     console.log(deleteId);
//     console.log(this.skillUrl+`/delete/${deleteId}`)
//     return this.http.delete(this.skillUrl+`/delete/${deleteId}`,{ headers: new HttpHeaders( {'Authorization': localToken})})
//   }

//   updateProfile(id: any, skill: Skill): Observable<any> {
//     const token = localStorage.getItem('token');
//     const url = this.skillUrl + `/updateskill/${id}`;
//     return this.http.put(url, skill, { headers: {'Authorization': token}}).pipe(
//       tap(_ => console.log(`updated category id=${id}`))
//     );
//   }


// }
