import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../skill.service';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-get-skills',
  templateUrl: './get-skills.component.html',
  styleUrls: ['./get-skills.component.css']
})
export class GetSkillsComponent implements OnInit {
  skills: Skill [];
  artists: Artist[]; 

  constructor(private skillService: SkillService,private artistService: ArtistService) { }

  ngOnInit() {
    this.getSkills();
    this.getArtists();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

}
