import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../service/artist.service';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Skill } from '../../models/skill';
import { Router } from '@angular/router';
import { FeedbackService } from '../../service/feedback.service';
import { Feedback } from '../../models/feedback';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
artist: any = {};
skill: any ={};
artists: Artist[]; 
token: string;
data: Feedback[] = [];
// deleteArray = new Array(3);
oneArtistSkills: Skill [];
artistId: number;



  constructor( private artistService: ArtistService, private skillService: SkillService, 
    private route: ActivatedRoute, private router: Router,private api: FeedbackService

    ) { }

  ngOnInit() {
    this.getToken();
    this.onGetArtist();
    this.getId();
  }


  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  } 


  getArtists() {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

  goToArtist (artistId) {
    this.router.navigate([`/skill/${this.artistId}`]);

  }

  getId (): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistId = id;
    console.log(this.artistId);
  }
  // getSkillsForOneArtist(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.artistId = id;
  //   this.skillService.getSkillsForOneArtist(this.artistId)
  //     .subscribe(oneArtistSkills => this.oneArtistSkills = oneArtistSkills)
  // }

  onGetArtist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

  onDeleteArtist(id): void {
    this.artistService.deleteArtist(id);
    this.getArtists();
  }

  onDeleteSkillProfile(profileId: number): void {
    console.log(this.token);
    console.log(this.artist.skills[0].id)
    this.skillService.adminDeleteSkillProfile(profileId, this.token)
        .subscribe( () => {console.log(
          'skill profile deleted'),
          this.onGetArtist();
        })

  // onUpdateArtist(id): void {
  //   this.artistService.updateArtist(id);
  // }
}


onAdminDeleteFeedback(feedbackId:number){
  this.api.adminDeleteFeedback(feedbackId, this.token)
  .subscribe( () => {console.log(
    'feedback profile deleted'),
    this.onGetArtist();
  })
}
}
