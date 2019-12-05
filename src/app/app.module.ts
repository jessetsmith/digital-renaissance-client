import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { GetArtistsComponent } from './get-artists/get-artists.component';
import { AdminComponent } from './admin/admin.component';
import { ArtistComponent } from './artist/artist.component';

import { ArtistsService } from '../service/artists.service';
import { ArtistService } from '../service/artist.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    AuthComponent,
    FooterComponent,
    ArtistsComponent,
    AboutComponent,
    GetArtistsComponent,
    AdminComponent,
    ArtistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [LoginComponent],
  providers: [ArtistsService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
