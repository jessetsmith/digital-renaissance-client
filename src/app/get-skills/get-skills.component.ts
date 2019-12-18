import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'url';


@Component({
  selector: 'app-get-skills',
  templateUrl: './get-skills.component.html',
  styleUrls: ['./get-skills.component.css']
})
export class GetSkillsComponent implements OnInit {
  skills: Skill []; 
  num: [];

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  ranPhoto (i) {
    for (i=1; i <=30; i ++ ) {
      return this.num = i;
    }
  }

}
