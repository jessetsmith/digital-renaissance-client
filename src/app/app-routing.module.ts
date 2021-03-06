import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback/callback.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { GetArtistsComponent } from './get-artists/get-artists.component';
import { GetSkillsComponent } from './get-skills/get-skills.component';
import { OneSkillComponent } from './one-skill/one-skill.component';
import { ArtistComponent } from './artist/artist.component';
import { AdminComponent } from './admin/admin.component';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { MyprofileComponent } from './myprofile/myprofile.component'
import { HomeComponent } from './home/home.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { EditFeedbackComponent } from './feedback-edit/edit-feedback.component';
// import { AuthGuardService as  AuthGuard 
// } from '../service/auth-guard.service';
import { AuthGuardService as  AuthGuard 
} from '../service/auth.guard';
import { AdminGuard } from '../service/admin.guard';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'auth', component: AuthComponent},
  {
    path: 'callback',
    component: CallbackComponent
  },
  {path: 'artists', component: ArtistsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'get-artists', component: GetArtistsComponent},
  {path: 'get-skills', component: GetSkillsComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'admin', component: AdminComponent,
  canActivate: [AdminGuard] 
 },
  {path: 'create-skill', component: CreateSkillComponent,
  canActivate: [AuthGuard] 
},
  {path: 'skill/getall',component: MyprofileComponent},
  {path: 'skill/:id', component: OneSkillComponent},
    {path: 'edit/:id', component: SkillEditComponent},
  {path: 'skill/:id/edit-feedback/:feedbackId', component: EditFeedbackComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
