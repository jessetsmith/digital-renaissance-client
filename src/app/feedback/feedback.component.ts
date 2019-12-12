import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbackService } from '../../service/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbacks: Feedback[];
ratings = [1,2,3,4,5]

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.onGetFeedback();
  }



  onSubmit(form: NgForm) {
    if (form.invalid){
      return;
    }
    const id = +this.route.snapshot.paramMap.get('id');
    this.feedbackService.createFeedback(id, form.value.rating, form.value.comment, form.value.type, form.value.skillId )
      .subscribe(
        data => console.log("Success!", data)
      )
      this.onGetFeedback();
      form.resetForm();
  }

  onGetFeedback(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.feedbackService.getFeedback(id)
      .subscribe(feedbacks => {
        this.feedbacks = feedbacks;
        console.log(feedbacks);
      })
  }

  onDeleteFeedback(id): void {
    this.feedbackService.deleteFeedback(id);
    this.onGetFeedback();
  }

}
