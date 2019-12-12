import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Feedback } from '../../models/feedback';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { FeedbackService } from '../../../service/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-feedback',
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.css']
})
export class EditFeedbackComponent implements OnInit {

  editForm: FormGroup;
  id:number= null;



  constructor(private formBuilder: FormBuilder,private router: Router, private feedbackService: FeedbackService, 
    private activeAouter: ActivatedRoute,) { }

  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);
 
    this.editForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required])],
    });
  }

  getDetail(id) {
    this.feedbackService.getFeedback(id)
      .subscribe(data => {
        this.id = data.id;
        this.editForm.setValue({
          comment: data.comment
        });
        console.log(data);
      });
  }
  updateFeedback(form:NgForm) {
 
    this.feedbackService.updateFeedback(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
     
  }


}
