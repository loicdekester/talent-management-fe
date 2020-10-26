import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/profile', component: ProfileComponent },
  { path: '/sign-up', component: SignUpComponent },
  { path: '/sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
