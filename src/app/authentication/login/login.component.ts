import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private router: Router, private authService: AuthService) { 

    // this.authService.user = {
    //   email: 'samsam@gmail.com',
    //   username: 'samson'
    // };
  }

  loginHandler(form: NgForm) {
    if(form.invalid) {return;}
    const value = {email: String, password: String} = form.value;
    this.authService.login(value);
    
  }
  
}
