import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../service/artist.service';
import { SkillService } from '../../service/skill.service'
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
artists: Artist[]; 
oneArtistSkills: Skill [];
artistId: number;
  constructor( private artistService: ArtistService, private skillService: SkillService, 
    private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit() {
    this.onGetArtist();
    this.getId();
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

  // onUpdateArtist(id): void {
  //   this.artistService.updateArtist(id);
  // }
}
