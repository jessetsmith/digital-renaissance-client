import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtistService } from '../../service/artist.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
 
 firstName= "";
 lastName= "";
 role= "";
 email= "";
 password= "";

  constructor(
    private artistService: ArtistService
    ) { }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.artistService.createArtist(form.value.firstName, form.value.lastName, form.value.password, form.value.email, form.value.role)
    form.resetForm();
  }
}

