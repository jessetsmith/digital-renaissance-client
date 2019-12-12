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

  constructor(private skillService: SkillService, private route: ActivatedRoute) { }
  // let artistId = this.getId();

  ngOnInit() {
    this.getSkillsForOneArtist();
  }

  getSkillsForOneArtist(): void {
    const id = JSON.parse(localStorage.getItem('artistInfo'));
    const artistId = id.artist.id;
    console.log(artistId)
    this.skillService.getSkillsForOneArtist(artistId)
      .subscribe(oneArtistSkills => this.oneArtistSkills = oneArtistSkills)
  }
  
}
