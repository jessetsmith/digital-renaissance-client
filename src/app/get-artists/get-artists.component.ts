import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
// import { ArtistsService } from '../../service/artists.service';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-get-artists',
  templateUrl: './get-artists.component.html',
  styleUrls: ['./get-artists.component.css']
})
export class GetArtistsComponent implements OnInit {
artists: Artist[]; 

  constructor(private artistService: ArtistService) { }


  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

  onDeleteArtist(id): void {
    this.artistService.deleteArtist(id);
    this.getArtists();
  }

}
