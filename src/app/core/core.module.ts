import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
  ]
})
export class CoreModule { }
