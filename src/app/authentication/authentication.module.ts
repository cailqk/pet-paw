import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../core/spinner/spinner.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent, 
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SpinnerComponent
  ]
})
export class AuthenticationModule { }
