import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ArtistService } from '../../service/artist.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 firstName= "";
 lastName= "";
 role= "";
 email= "";
 password= "";

//  newArtist = new Artist (
//    this.firstName, 
//    this.lastName, 
//    this.password,
//    this.email,
//    this.role
//  )
  
  

  constructor(
    private artistService: ArtistService
    ) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.artistService.createArtist(form.value.firstName, form.value.lastName, form.value.password, form.value.email, form.value.role)
    .subscribe(
      data => console.log("success", data)
    )
    form.resetForm();
  }
}

