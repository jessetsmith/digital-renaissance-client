import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-get-skills',
  templateUrl: './get-skills.component.html',
  styleUrls: ['./get-skills.component.css']
})
export class GetSkillsComponent implements OnInit {
  skills: Skill [];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

}
