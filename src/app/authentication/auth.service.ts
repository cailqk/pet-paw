import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error: string | null = null;

  constructor(private apiService: ApiService) {
   
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
