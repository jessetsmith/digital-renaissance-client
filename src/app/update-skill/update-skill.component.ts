import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill'
import { ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  skill: Skill[]

  constructor() { }

  ngOnInit() {
    // this.onGetSkill()
  }

  // onGetSkill(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.feedbackService.getFeedback(id)
  //     .subscribe(skill => {
  //       this.skill = skill;
  //       console.log(skill);
  //     })
  // }

}