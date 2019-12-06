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


  constructor( private artistService: ArtistService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

}


// this.hero$ = this.route.paramMap.pipe(
//   switchMap((params: ParamMap) =>
//     this.service.getHero(params.get('id')))
// );
// }

// let id = this.route.snapshot.paramMap.get('id');
// this.hero$ = this.service.getHero(id);