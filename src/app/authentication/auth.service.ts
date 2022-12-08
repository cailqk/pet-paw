import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  isLoggedIn = () => {
    return this.user !== null;
  }
  constructor(private apiService: ApiService, private router: Router) {}

  register(value: any) {
    this.apiService.registerUser(value).subscribe((res) => {
      this.user = res;
      this.router.navigate(['/catalog']);
    })
  };

  login(value: any) {
    this.apiService.logUserIn(value).subscribe((res) => {
      console.log('from authservice---', res);
      this.user = res;
      this.router.navigate(['/catalog']);
    })
  }
  
  
  
}
