import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Skill} from '../models/skill';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsUrl = 'http://dr-server.herokuapp.com/skill/getall';

  private oneSkillUrl = "http://dr-server.herokuapp.com/skill"

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

}
