import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';
import { ApiService } from '../api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;
  error: string | null = null;

  isLoggedIn = () => {
    return this.user !== null;
  }
  constructor(private apiService: ApiService) {
   
  }
  register(value: {email: string, password: string}) {
    return this.apiService.registerUser(value);
  };
  
  login(value: {email: string, password: string}) {
   return this.apiService.logUserIn(value);
  };



}
