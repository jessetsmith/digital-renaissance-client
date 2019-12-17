import { Component} from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { TypeOfArtist } from '../type-of-artists'

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


//   skillType: TypeOfArtist[] = [
//    {value: 'Photographer', viewValue: 'Photographer'},
//    {value: 'Musician', viewValue: 'Musician'},
//    {value: 'Illustrator', viewValue: 'Illustrator'}
//  ]

//  skillTypeHasError = true;

//  typeOfArtists= ["Photographer", "Musician", "Illustrator"];

// validateskillType(value) {
//   if(value === 'default'){
//     this.skillTypeHasError = true;
//   } else {
//     this.skillTypeHasError = false;
//   }
// }

// saveSkillInfo(skillInfo: string){
//   localStorage.setItem('skillInfo', JSON.stringify(skillInfo))
// }

onSubmit(form: NgForm) {
  if (form.invalid){
    return;
  }
  this.skillService.createSkill(form.value.title, form.value.description, form.value.image, form.value.price, form.value.skillType, form.value.artistId )
    .subscribe(
        data => console.log("Success!", data)
    )
    form.resetForm();
    this.redirect();
}

  constructor(private route: ActivatedRoute, private skillService: SkillService, private router: Router) { }

  // refresh () {
  //   this.resolveAfter1Second(10).then(reload => {
  //     reload == location.reload();
  //     this.redirect();
  //   })
  // }

  resolveAfter1Second(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  redirect () {
    this.resolveAfter1Second(10).then(redirect => {
      redirect == this.router.navigate(['/skill/getall']);
    })
    
  }
  
  }