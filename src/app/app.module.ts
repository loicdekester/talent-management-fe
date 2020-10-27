import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheFooterComponent } from './views/the-footer/the-footer.component';
import { TheHeaderComponent } from './views/the-header/the-header.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LanguageComponent } from './components/language/language.component';
import { SignInComponent } from './views/auth/sign-in/sign-in.component';
import { SignUpComponent } from './views/auth/sign-up/sign-up.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TheFooterComponent,
    TheHeaderComponent,
    InfoComponent,
    ExperienceComponent,
    EducationComponent,
    LanguageComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
