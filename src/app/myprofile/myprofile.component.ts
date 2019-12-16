import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  private artistId: number;
  oneArtistSkills: Skill [];
  deleteSkill: Skill [];
  token: string;
  // confirm = false;

  constructor(private skillService: SkillService, private route: ActivatedRoute) { 
  }
  // let artistId = this.getId();
  
  ngOnInit() {
    this.getSkillsForOneArtist();
    this.getToken();
    // console.log(this.confirm);
  }

  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
  // confirmDelete() {
  //   this.confirm = !this.confirm;
  //   console.log(this.confirm);
  // }

  getSkillsForOneArtist(): void {
    const id = JSON.parse(localStorage.getItem('artistInfo'));
    const artistId = id.artist.id;
    console.log(id)
    this.skillService.getSkillsForOneArtist(artistId)
      .subscribe(oneArtistSkills => this.oneArtistSkills = oneArtistSkills)
  }

  onDeleteSkillProfile(profileId: number): void {
    // const id = JSON.parse(localStorage.getItem('artistInfo'));
    // const deleteId = id.artist.id;
    console.log(this.token);
    console.log(this.oneArtistSkills)
    // this.oneArtistSkills.splice(0,1);
    this.skillService.deleteSkillProfile(profileId, this.token)
        .subscribe( () => {console.log(
          'skill profile deleted'),
  //       () => console.log("Skill with Id = ${this.deleteId} deleted"),
  //       (err) => console.log('error')
  // }
    this.getSkillsForOneArtist();
        })
  
}
}




// import { SkillService } from '../../service/skill.service';
// import { ActivatedRoute } from '@angular/router';
// import {MatDialog} from '@angular/material/dialog';


// @Component({
//   selector: 'app-myprofile',
//   templateUrl: './myprofile.component.html',
//   styleUrls: ['./myprofile.component.css']
// })
// export class MyprofileComponent implements OnInit {
//   private artistId: number;
//   oneArtistSkills: Skill [];
//   deleteSkill: Skill [];
//   // editProfile: Skill [];
//   token: string;

//   constructor(private skillService: SkillService, private route: ActivatedRoute) { 
//   }
  
  
//   ngOnInit() {
//     this.getSkillsForOneArtist();
//     this.getToken();
   
//   }

//   getToken() {
//     this.token = localStorage.getItem('token');
//     console.log(this.token);
//   }
 
//   //for some reason artistId used to be =id.artist.id

//   getSkillsForOneArtist(): void {
//     const id = JSON.parse(localStorage.getItem('artistInfo'));
//     const artistId = id.artist.id
//     console.log(artistId);
//     this.skillService.getSkillsForOneArtist(artistId)
//       .subscribe(oneArtistSkills => this.oneArtistSkills = oneArtistSkills)
//   }

//   onDeleteSkillProfile(profileId: number): void {
//     console.log(this.token);
//     console.log(this.oneArtistSkills)
//     this.skillService.deleteSkillProfile(profileId, this.token)
//         .subscribe( () => {console.log(
//           'skill profile deleted'),
//     this.getSkillsForOneArtist();
//         })
// }

// }




