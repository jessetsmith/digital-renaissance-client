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
feedback= [];
array = [
  {
    guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
    age: 32,
    name: 'Powers Schneider',
  },
  {
    guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
    age: 25,
    name: 'Adrian Lawrence',
  },
  {
    guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
    age: 32,
    name: 'Boyer Stanley',
  },
]

ratings = [1,2,3,4,5]

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.onGetFeedback();
  }

  // getArtists(): void {
  //   this.feedbackService.getFeedback(id)
  //     .subscribe(feedback => this.feedback = feedback);
  // }

  onGetFeedback(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.feedbackService.getFeedback(id)
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
      form.resetForm();
  }


}
