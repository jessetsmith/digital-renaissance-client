import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent {
  title="";
  description="";
  image="";
  price="";
  skillType="";
  artistId="";

 typeOfArtists= ["Photographer", "Musician", "Illustrator"];

 skillTypeHasError = true;



validateskillType(value) {
  if(value === 'default'){
    this.skillTypeHasError = true;
  } else {
    this.skillTypeHasError = false;
  }
}

onSubmit(form: NgForm) {
  if (form.invalid){
    return;
  }
  this.skillService.createSkill(form.value.title, form.value.description, form.value.image, form.value.price, form.value.skillType, form.value.artistId )
    .subscribe(
      data => console.log("Success!", data)
    )
    form.resetForm();
}


  constructor(private route: ActivatedRoute, private skillService: SkillService) { }


}
