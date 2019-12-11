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
  
  constructor(private artistService: ArtistService) { }

 

  ngOnInit() {
    this.authListenerSubs = this.artistService.getAuthStatusListener()
    .subscribe(
      isAuthenticated =>{
          this.artistIsAuthenticated = isAuthenticated;
      }
    );
    
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();

  }

}
