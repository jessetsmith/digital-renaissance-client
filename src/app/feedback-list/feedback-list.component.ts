// import { Component, OnInit } from '@angular/core';
// import { Feedback } from '../../models/feedback';
// import { FeedbackService } from '../../service/feedback.service';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-feedback-list',
//   templateUrl: './feedback-list.component.html',
//   styleUrls: ['./feedback-list.component.css']
// })
// export class FeedbackListComponent implements OnInit {
//   feedbacks: Feedback[];

//   constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

//   ngOnInit() {
//  this.onGetFeedback();
//   }

//   onGetFeedback(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.feedbackService.getFeedback(id)
//       .subscribe(feedbacks => {
//         this.feedbacks = feedbacks;
//         console.log(feedbacks);
//       })
//   }
// }




import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../service/feedback.service';
import { Feedback } from '../../models/feedback';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  displayedColumns: string[] = ['rating', 'comment'];
  data: Feedback[] = [];
  token: string;
  isLoadingResults = true;

  //if the logged in id is equal to the comment id than show the update and delete 
  constructor(private route: ActivatedRoute, private api: FeedbackService, private router: Router) { }

  ngOnInit() {
    const skillid = +this.route.snapshot.paramMap.get('id')
    this.getAllFeedback(skillid);
    this.getToken();
    // const id = +this.route.snapshot.paramMap.get('id')
    // this.api.getFeedback(id)
    //   .subscribe((res: any) => {
    //     this.data = res;
    //     console.log(this.data);
    //     this.isLoadingResults = false;
    //   }, err => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   });
    
  }

  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  deleteFeedback(id: any) {
    const skillId = +this.route.snapshot.paramMap.get('id')
    this.isLoadingResults = true;
    this.api.deleteFeedback(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          // this.router.navigate([`/skill/${skillId}`]);
          this.getAllFeedback(skillId);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
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
