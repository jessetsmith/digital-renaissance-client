import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../service/artist.service'
import { Artist } from '../../models/artist'

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  a: Artist [];
  artistId: '';

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getLoggedInUser();
    this.getOneArtist(this.artistId)
  }

  
  getLoggedInUser() {
    const id = JSON.parse(localStorage.getItem('artistInfo'));
    this.artistId = id.id;
  }


  getOneArtist (artistId) :void {
    this.artistService.getArtist(artistId)
    .subscribe(a => this.a = a);

  }
}
