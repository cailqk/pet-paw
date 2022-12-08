import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { 
    
  }
  
  ngOnInit(): void {
  }

  registerHandler(form: NgForm) {
    if(form.invalid) {return;}
    const value = {email: String, username: String, password: String, repassword: String} = form.value;
    this.authService.register(value);
  }

}
