import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Skill} from '../models/skill';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillsUrl = 'http://dr-server.herokuapp.com/skill/getall'

  constructor(private http: HttpClient) { }

  getSkills (): Observable<Skill[]>{
    console.log(this.skillsUrl)
    return this.http.get<Skill[]>(this.skillsUrl)
    .pipe(map(id => id))
  }
}
