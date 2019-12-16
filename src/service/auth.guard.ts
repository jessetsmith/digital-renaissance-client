import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
// import { AuthorizeService } from './authorize.service';
import { ArtistService } from '../service/artist.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
    
    artistIsAuthenticated = false;
    private authListenerSubs: Subscription;
    // private artistId: number;
    // artistName: string;
    // profile: any;
    // auth: any;

    constructor(private artistService: ArtistService ) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if(localStorage.getItem('token')){
       return true;
     }
      return false;
    }
   
  
}