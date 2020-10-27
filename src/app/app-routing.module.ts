import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { SignUpComponent } from "./views/auth/sign-up/sign-up.component";
import { SignInComponent } from "./views/auth/sign-in/sign-in.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
