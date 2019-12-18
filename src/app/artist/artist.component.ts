import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../service/artist.service';
import { SkillService } from '../../service/skill.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


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
// deleteArray = new Array(3);


  constructor( private artistService: ArtistService, private skillService: SkillService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getToken();
    this.onGetArtist();
  }

  getToken() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  } 

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

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
          'skill profile deleted')
        })

  // onUpdateArtist(id): void {
  //   this.artistService.updateArtist(id);
  // }
}
}
