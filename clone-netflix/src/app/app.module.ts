import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPasswordComponent } from './pages/login-password/login-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterSignInComponent } from './components/footer-sign-in/footer-sign-in.component';
import { HomeSelectionVideoComponent } from './pages/home-selection-video/home-selection-video.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { PerfilBrowseComponent } from './components/perfil-browse/perfil-browse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    LoginPasswordComponent,
    SignInComponent,
    FooterSignInComponent,
    HomeSelectionVideoComponent,
    BrowseComponent,
    PerfilBrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
