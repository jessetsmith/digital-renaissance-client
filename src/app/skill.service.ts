import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Skill} from '../models/skill';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsUrl = 'http://dr-server.herokuapp.com/skill/getall';

  private oneSkillUrl = "http://dr-server.herokuapp.com/skill"

  private createSkillUrl="http://dr-server.herokuapp.com/skill/create"

  // private createSkillUrl="http://localhost:3000/skill/create"

  constructor(private http: HttpClient) { }

  getSkills (): Observable<Skill[]>{
    console.log(this.skillsUrl)
    return this.http.get<Skill[]>(this.skillsUrl)
    .pipe(map(id => id))
  }

  getOneSkill (skillId): Observable<Skill[]>{
    console.log(this.oneSkillUrl)
    return this.http.get<Skill[]>(this.oneSkillUrl+`/${skillId}`)
  }

  createSkill(skill: Skill) {
    return this.http.post<any>(this.createSkillUrl, skill)

  }

}
