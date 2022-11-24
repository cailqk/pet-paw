import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCLient: HttpClient) { }

  getUsers = () => {
    console.log(this.httpCLient.get(`${apiUrl}/users`));

    return this.httpCLient.get(`${apiUrl}/users`);
  }

  registerUser = (data: {email: string, username: string, password: string}) => {

    return this.httpCLient.post(`${apiUrl}/register`, data)
  }

}
