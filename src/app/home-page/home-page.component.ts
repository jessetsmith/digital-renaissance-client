import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../login/login.component';
import { ArtistService } from '../../service/artist.service';
import { Subscription } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from "@angular/router";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  // artistIsAuthenticated = false;
  // private authListenerSubs: Subscription
  // private artistId: number;
  artistName: string;
  profile: any;
  auth: any;
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  isAdmin: boolean = false;

  constructor(private artistService: ArtistService, private appRouting : AppRoutingModule, private router: Router,
    ) {
    
   }
  
 

  ngOnInit() {
      const loggedIn = localStorage.getItem('token');

      if (loggedIn != null ) {
        this.loggedIn = true;
      }

      const name = JSON.parse(localStorage.getItem('artistInfo'));
      const artistName = name.artist.firstName;
      console.log(artistName);

      this.artistName = artistName;
       
      const role = JSON.parse(localStorage.getItem('artistInfo')).artist.role;

      if (role === 'admin') {
        this.isAdmin = true;
      }
        
  }

  
  // setLoggedIn () {
  //   if(localStorage.getItem('token')){
  //    this.loggedIn = true;
  //    }else {this.loggedIn = false};
  // }

  // setLoggedOut() {
  //   if (localStorage.getItem('token')){
  //      this.loggedOut = false;
  //   }else{ this.loggedOut = true};
  // }

  // refresh () {
  //   location.reload();
  // }

  refresh () {
    this.resolveAfter1Second(10).then(reload => {
      reload == location.reload();
    })
  }

  resolveAfter1Second(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  redirect () {
    this.router.navigate(["/login"])
  }

  logout(){
    localStorage.clear();
    this.refresh();
    this.redirect();

    
  }
  ngOnDestroy() {
    // this.authListenerSubs.unsubscribe();

  }

  

}
