import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-one-skill',
  templateUrl: './one-skill.component.html',
  styleUrls: ['./one-skill.component.css']
})
export class OneSkillComponent implements OnInit {
  oneSkill: any = {};

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneSkill();
  }

  getOneSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.skillService.getOneSkill(id)
      .subscribe(oneSkill => this.oneSkill = oneSkill);

  }

}
