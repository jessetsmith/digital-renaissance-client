import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../login/login.component';
import { ArtistService } from '../../service/artist.service'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  artistIsAuthenticated = false;
  private authListenerSubs: Subscription
  private artistId: number;
  artistName: string;
  profile: any;
  auth: any;

  
  constructor(private artistService: ArtistService) { }

 

  ngOnInit() {
    this.authListenerSubs = this.artistService.getAuthStatusListener()
    .subscribe(
      isAuthenticated =>{
          this.artistIsAuthenticated = isAuthenticated;
      }
    );
      // if (this.artistIsAuthenticated = true) {
      //   this.profile = localStorage.getItem('artistInfo');
      //   console.log(this.profile);
      //   // this.artistName = this.profile.firstName;
      //   // console.log(this.artistName);
      // }

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();

  }

  

}
