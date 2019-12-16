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
  refresh () {
    this.resolveAfter3Seconds(30).then(reload => {
      reload == location.reload();
    })
  }

  resolveAfter3Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 3000);
    });
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.artistService.loginArtist(form.value.password, form.value.email)
    form.resetForm();
  }

}
