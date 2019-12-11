import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { FeedbackService } from '../../service/feedback.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedback: Feedback[];

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFeedback();
  }

  getFeedback(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.feedbackService.getFeedback(id)
      .subscribe(feedback => this.feedback = feedback);
  }

}
