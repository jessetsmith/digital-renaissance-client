import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback/callback.component';

import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { GetArtistsComponent } from './get-artists/get-artists.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'auth', component: AuthComponent},
  {
    path: 'callback',
    component: CallbackComponent
  },
  {path: 'artists', component: ArtistsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'get-artists', component: GetArtistsComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
