import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-get-artists',
  templateUrl: './get-artists.component.html',
  styleUrls: ['./get-artists.component.css']
})
export class GetArtistsComponent implements OnInit {
artists: Artist[]; 

  constructor( private artistService: ArtistService) { }


  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

}
