import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPasswordComponent } from './pages/login-password/login-password.component';
import { HomeSelectionVideoComponent } from './pages/home-selection-video/home-selection-video.component';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginPasswordComponent
  },
  {
    path:'browse',
    component: BrowseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
