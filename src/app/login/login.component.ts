import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email="";
password="";

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.artistService.loginArtist(form.value.password, form.value.email)
    .subscribe(
      data => console.log("success", data)
    )
    form.resetForm();
  }

}
