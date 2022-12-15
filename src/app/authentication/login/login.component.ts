import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string | null = null;

  constructor(private authService: AuthService) {
  }

  loginHandler(form: NgForm) {
    if (form.invalid) { return; }
    const value = { email: String, password: String } = form.value;
    this.error = this.authService.error;
    this.authService.login(value).subscribe(res => {
      console.log(res);
    },
    errorRes => {
      return this.error = errorRes.toString();
    }
    )
    form.reset();
  }

}