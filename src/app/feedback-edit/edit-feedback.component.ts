// import { Component, OnInit } from '@angular/core';
// import {Router} from "@angular/router";
// import { Feedback } from '../../models/feedback';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {first} from "rxjs/operators";
// import { FeedbackService } from '../../service/feedback.service';
// import { ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-edit-feedback',
//   templateUrl: './edit-feedback.component.html',
//   styleUrls: ['./edit-feedback.component.css']
// })
// export class EditFeedbackComponent implements OnInit {

//   editForm: FormGroup;
//   id:number= null;



//   constructor(private formBuilder: FormBuilder,private router: Router, private feedbackService: FeedbackService, 
//     private activeAouter: ActivatedRoute,) { }

//   ngOnInit() {
//     this.getDetail(this.activeAouter.snapshot.params['id']);
 
//     this.editForm = this.formBuilder.group({
//       comment: ['', Validators.compose([Validators.required])],
//     });
//   }


//   onUpdate(form: NgForm) {
//     if (form.invalid){
//       return;
//     }
//     // const id = +this.route.snapshot.paramMap.get('id');
//     this.feedbackService.updateFeedback(this.id, form.value.rating, form.value.comment, form.value.type, form.value.skillId )
//       .subscribe(
//         data => console.log("Success!", data)
//       )
      
//       form.resetForm();
//       this.router.navigate(["/get-skills"])

//   }


// }



import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../../service/feedback.service';
import { Feedback } from '../../models/feedback';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-edit-feedback',
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.css']
})
export class EditFeedbackComponent implements OnInit {
  data: Feedback[] = [];



  

  feedbackForm: FormGroup;
  id = '';
  rating = '';
  comment = '';
  isLoadingResults = false;

  feedback: Feedback = {
    rating: null,
    comment: '',
    type: '',
    skillId: null
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: FeedbackService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.getCategories();
    this.getFeedback(this.route.snapshot.params.id);
    this.feedbackForm = this.formBuilder.group({
      rating: [null, Validators.required],
      comment : [null, Validators.required]
    });
  }

  getFeedback(id: any) {
   const skillId = this.route.snapshot.paramMap.get('id');
   
    const feedbackId = +this.route.snapshot.paramMap.get('feedbackId')

    this.api.getFeedback(skillId).subscribe((data: any) => {
    console.log(feedbackId)
    console.log(skillId)
    const feedbackOne = data.find(data => {
      if (data.id === feedbackId){
        console.log(data.id, feedbackId)
        this.id = data.id;
        this.feedbackForm.setValue({
        rating: data.rating,
        comment: data.comment
      });
      }
    });
      
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateFeedback(this.id, this.feedbackForm.value)
      .subscribe((res: any) => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['artists']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}