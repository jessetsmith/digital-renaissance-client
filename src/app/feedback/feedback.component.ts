import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../service/feedback.service';
import { Feedback } from '../../models/feedback';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data: Feedback[] = [];

  feedbackForm: FormGroup;
  rating = '';
  comment = '';
  isLoadingResults = false;


  feedback: Feedback = {
    id: null,
    rating: null,
    comment: '',
    type: '',
    skillId: null
  };

  constructor(private route: ActivatedRoute, private api: FeedbackService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getFeedbackDetails(this.route.snapshot.params.id);
    this.feedbackForm = this.formBuilder.group({
      rating : [null, Validators.required],
      comment : [null, Validators.required]
    });
    // this.onGetFeedback();
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    const skillId = this.route.snapshot.params.id
    this.api.createFeedback(skillId, this.feedbackForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          // const skillid = +this.route.snapshot.paramMap.get('id')
          
          // this.router.navigate(['artist']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
        
        // console.log(this.getAllFeedback(skillId))
        this.feedbackForm.reset();
        this.api.getFeedback(skillId);
  }

  getFeedbackDetails(id: any) {
    this.api.getFeedback(id)
      .subscribe((data: any) => {
        this.feedback = data;
        this.feedback.id = data._id;
        console.log(this.feedback);
        this.isLoadingResults = false;
      });
  }

  getAllFeedback(id: any){
    const skillid = +this.route.snapshot.paramMap.get('id')
    this.api.getFeedback(skillid)
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}