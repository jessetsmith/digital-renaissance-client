import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { ArtistService } from '../../service/artist.service';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-one-skill',
  templateUrl: './one-skill.component.html',
  styleUrls: ['./one-skill.component.css']
})
export class OneSkillComponent implements OnInit {
  oneSkill: any = {};
  constructor(private skillService: SkillService, private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneSkill();
  }

  getOneSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.skillService.getOneSkill(id)
      .subscribe(oneSkill => this.oneSkill = oneSkill);
  }

 

//  onSubmit(form: NgForm):void {
//    this.artistService.formSpree(form.value.name, form.value.email, form.value.message)
//     .subscribe(
//       data =.
//     )

}


