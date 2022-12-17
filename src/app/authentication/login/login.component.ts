import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string | null = null;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  loginHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const value = form.value;
    this.error = this.authService.error;
    this.isLoading = true;
    this.authService.login(value).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigateByUrl('/catalog');
      },
      (errorRes) => {
        this.isLoading = false;
        return (this.error = errorRes.toString());
      }
      );
    form.reset();
  }
}
