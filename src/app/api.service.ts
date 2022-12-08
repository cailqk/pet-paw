import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { IUser } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    console.log(this.http.get(`${apiUrl}/users`));

    return this.http.get(`${apiUrl}/users`);
  }


  registerUser = (data: { email: string, username: string, password: string }) => {
    return this.http.post<IUser>(`${apiUrl}/register`, data)
      .pipe(catchError(this.handleError));
  };

  logUserIn = (data: { email: string, password: string }) => {
    return this.http.post<IUser>(`${apiUrl}/login`, data)
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
