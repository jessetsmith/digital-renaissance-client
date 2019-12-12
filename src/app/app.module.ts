import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallbackComponent } from './callback/callback/callback.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { GetArtistsComponent } from './get-artists/get-artists.component';
import { AdminComponent } from './admin/admin.component';
import { ArtistComponent } from './artist/artist.component';
import { GetSkillsComponent } from './get-skills/get-skills.component';

// import { ArtistsService } from '../service/artists.service';
// import { AuthGuardService } from '../service/auth-guard.service';
//import { SkillService } from './skill.service';
import { ArtistsService } from '../service/artists.service';
import { SkillService } from '../service/skill.service';
import { ArtistService } from '../service/artist.service';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { OneSkillComponent } from './one-skill/one-skill.component';
import {MatSelectModule} from '@angular/material/select';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HomeComponent } from './home/home.component';
import { Feedback } from 'src/models/feedback';
import { FeedbackComponent } from './feedback/feedback.component';
import {AuthInterceptor } from './auth-interceptor';
import { MyprofileComponent } from './myprofile/myprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    AuthComponent,
    FooterComponent,
    CallbackComponent,
    ArtistsComponent,
    AboutComponent,
    GetArtistsComponent,
    AdminComponent,
    ArtistComponent,
    GetSkillsComponent,
    CreateSkillComponent,
    OneSkillComponent,
    MyprofileComponent,
    HomeComponent,
    FeedbackComponent

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
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatTableModule

  ],
  entryComponents: [LoginComponent],

  providers: [AuthService, ArtistService, SkillService, JwtHelperService ],

  bootstrap: [AppComponent]
})
export class AppModule { }

// {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}