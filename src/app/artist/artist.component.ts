import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../service/artist.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
artist: any = {};
artists: Artist[]; 


  constructor( private artistService: ArtistService, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.onGetArtist();
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

  // onUpdateArtist(id): void {
  //   this.artistService.updateArtist(id);
  // }
}
