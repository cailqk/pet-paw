import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error: string | null = null;

  constructor(private authService: AuthService) {
  }

  registerHandler(form: NgForm) {
    if (!form.valid) { return; }
    const value = { email: String, password: String } = form.value;
    this.error = this.authService.error;
    this.authService.register(value).subscribe(res => {

      console.log(res);
      form.reset();
    },
      errorRes => {
        return this.error = errorRes.toString();
      }
    );
  }

}
