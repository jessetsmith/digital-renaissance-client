import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Skill} from '../models/skill';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillUrl = "http://dr-server.herokuapp.com/skill";

  // private skillsUrl = 'http://dr-server.herokuapp.com/skill/getall';

  // private oneSkillUrl = "http://dr-server.herokuapp.com/skill"

  // private createSkillUrl="http://dr-server.herokuapp.com/skill/create"

  // private createSkillUrl="http://localhost:3000/skill/create"

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

  createSkill(title: string, description: string, image: string, price: number, skillType: string, artistId: number ) {
    const skill: Skill = { title: title, description: description, image: image, price: price, skillType: skillType, artistId: artistId }
    const token = localStorage.getItem('token');
    return this.http.post<any>(this.skillUrl + '/create', skill, { headers: {'Authorization': token}})

  }

}