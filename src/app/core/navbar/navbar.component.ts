import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  get isLoggedIn () {
    return this.authService.isLoggedIn();
  }

  get user () {
    return this.authService.user;
  }

  constructor(private authService: AuthService, private router: Router) {

   }

}
