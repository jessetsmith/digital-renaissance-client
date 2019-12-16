import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillService } from '../../service/skill.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Skill } from '../../models/skill';


@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {
  skillForm: FormGroup;
  token: string;
  skill= '';
  id = '';
  title = '';
  description = '';
  image = '';
  price = '';
  skillType = '';
  artistId = '';
  skills: Skill[]=[];


  constructor( private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder, private skillService: SkillService) { }

  ngOnInit() {
    this.getOneSkill(this.route.snapshot.params.id);
    this.skillForm = this.formBuilder.group({
      title: [null], 
      description: [null], 
      image: [null], 
      price: [null], 
      skillType: [null], 
      artistId: [null], 
    })
  }


  getOneSkill(id: any) {
    this.skillService.getOneSkill(id)
    .subscribe((data: any) =>{
      this.id = data.id;
      this.skillForm.setValue({
        title: data.title,
        description: data.description,
        image: data.image,
        price: data.price,
        skillType: data.skillType,
        artistId: data.artistId
      })
    })}
    

    onFormSubmit(){
      this.skillService.updateSkill(this.id, this.skillForm.value)
        .subscribe((res: any) => {
            const id = res.id;
            this.router.navigate(['/skill/getall']);
          });
    };
  
    // showSkillProfile(){
    //   this.router.navigate(['/skill/:id', this.id])
    // }


  }

