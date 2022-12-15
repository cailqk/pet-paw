import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IPet } from './interfaces';

const apiUrl = 'https://pets-db-c6a56-default-rtdb.europe-west1.firebasedatabase.app';
const registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdN0L9S7SY-pv6Dn05i69pkPFjK0bVBnU';
const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdN0L9S7SY-pv6Dn05i69pkPFjK0bVBnU';

interface AuthResData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private errorHandler(errorRes: HttpErrorResponse) {
    let errMsg = 'An unknown error occured'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errMsg));
    }
    if (errorRes.error.error.message == 'EMAIL_EXISTS') {
      errMsg = 'Email already in use. Please choose another one.'
    } else if (errorRes.error.error.message == 'EMAIL_NOT_FOUND' || errorRes.error.error.message == 'INVALID_PASSWORD') {
      errMsg = 'Incorrect email or password.'
    }
    console.log('from api service', errMsg);
    return throwError(() => new Error(errMsg));
  }


  registerUser = (value: { email: string, password: string }) => {
    return this.http.post<AuthResData>(`${registerUrl}`, {
      email: value.email,
      password: value.password,
      returnSecureToken: true
    }
    ).pipe(catchError(errorRes => {
      return this.errorHandler(errorRes)
    }
    )
    )
  };

  logUserIn = (data: { email: string, password: string }) => {
    return this.http.post<AuthResData>(loginUrl, {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    }
    ).pipe(catchError(errorRes => {
      return this.errorHandler(errorRes);
    }
    )
    )
  }

  createPet = (data: { name: string, type: string, age: number, image: string, description: string }) => {
    console.log(data);
    return this.http.post<IPet>(`${apiUrl}/pets/create`, data);
  }
}
