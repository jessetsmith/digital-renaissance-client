import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../skill.service'
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent {
 typeOfArtists = ['Photographer', 'Musician', 'Illustrator'];
 skillTypeHasError = true;

skillModel = new Skill('Destination Wedding Photographer', 'very great photographer', 'url', 100, 'default', 12);


validateskillType(value) {
  if(value === 'default'){
    this.skillTypeHasError = true;
  } else {
    this.skillTypeHasError = false;
  }
}

onSubmit() {
  this.skillService.createSkill(this.skillModel)
    .subscribe(
      data => console.log("Success!", data),
      error => console.log("Error", error)
    )
}


  constructor(private route: ActivatedRoute, private skillService: SkillService) { }


}
