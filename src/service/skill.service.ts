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
}
