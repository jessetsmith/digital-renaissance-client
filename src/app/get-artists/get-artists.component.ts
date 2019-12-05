import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistsService } from '../../service/artists.service';

@Component({
  selector: 'app-get-artists',
  templateUrl: './get-artists.component.html',
  styleUrls: ['./get-artists.component.css']
})
export class GetArtistsComponent implements OnInit {
artists: Artist[]; 

  constructor( private artistsService: ArtistsService) { }


  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistsService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

}
