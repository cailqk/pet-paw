import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error: string | null = null;

  constructor(private router: Router, private apiService: ApiService) {
   
  }
  register(value: {email: string, password: string}) {
    return this.apiService.registerUser(value);
  };
  
  login(value: {email: string, password: string}) {
   return this.apiService.logUserIn(value);
  };

  logout() {
    return this.apiService.logUserOut();
  }



}
