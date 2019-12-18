import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../service/artist.service';
import { SkillService } from '../../service/skill.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Skill } from '../../models/skill';
import { Router } from '@angular/router';


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
oneArtistSkills: Skill [];
artistId: number;
  constructor( private artistService: ArtistService, private skillService: SkillService, 
    private route: ActivatedRoute, private router: Router

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

  goToArtist () {
    this.router.navigate([`/skill/getall/${this.artistId}`]);

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
}
