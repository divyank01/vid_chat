import { ConfigService } from './service/config.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { LoginService } from './service/login.service';
import { RtcService } from './service/rtc.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'video', component: VideoComponent, outlet: 'side' },
    { path: 'account', component: LoginComponent, outlet: 'side' },
    { path: 'search', component: SearchComponent, outlet:'side' },
    { path: 'profile', component: ProfileComponent, outlet:'side'}
  ]},
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SidebarComponent,
    HeaderComponent,
    VideoComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    UserService,
    ConfigService,
    LoginService,
    RtcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
