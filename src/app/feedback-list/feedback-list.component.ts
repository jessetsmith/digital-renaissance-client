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

  isLoadingResults = true;

  artistId = '';



  constructor(private route: ActivatedRoute, private api: FeedbackService, private router: Router) { }

  ngOnInit() {
    this.getLoggedInUser();
    const skillid = +this.route.snapshot.paramMap.get('id')
    this.getAllFeedback(skillid);
    
    
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

  getLoggedInUser() {
    const id = JSON.parse(localStorage.getItem('artistInfo'));
    this.artistId = id.artist.id;
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
