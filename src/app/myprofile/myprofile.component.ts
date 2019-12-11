import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  // oneArtistSkills: any = {}; 
  oneArtistSkills: Skill [];

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSkillsForOneArtist();
  }

  getCurrentId(): void {
    return JSON.parse(localStorage.getItem('id'))
  }

  getSkillsForOneArtist(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = +localStorage.getItem('id')
    this.skillService.getSkillsForOneArtist(id)
      .subscribe(oneArtistSkills => this.oneArtistSkills = oneArtistSkills)
  }
  
}
