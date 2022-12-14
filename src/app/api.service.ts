import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './authentication/user.model';
import { IPet } from './interfaces';

const apiUrl =
  'https://pets-db-c6a56-default-rtdb.europe-west1.firebasedatabase.app';
const registerUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdN0L9S7SY-pv6Dn05i69pkPFjK0bVBnU';
const loginUrl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdN0L9S7SY-pv6Dn05i69pkPFjK0bVBnU';

interface AuthResData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  owner = localStorage.getItem('user');  
  user = new BehaviorSubject<User>(null!);
  private tokenExpired: any;

  constructor(private http: HttpClient, private router: Router) {}

  private errorHandler(errorRes: HttpErrorResponse) {
    let errMsg = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errMsg));
    }
    if (errorRes.error.error.message == 'EMAIL_EXISTS') {
      errMsg = 'Email already in use. Please choose another one.';
    } else if (
      errorRes.error.error.message == 'EMAIL_NOT_FOUND' ||
      errorRes.error.error.message == 'INVALID_PASSWORD'
    ) {
      errMsg = 'Incorrect email or password.';
    }
    console.log('from api service', errMsg);
    return throwError(() => new Error(errMsg));
  }

  private AuthHandler(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.removeUser(expiresIn * 1000);
    localStorage.setItem('user', JSON.stringify(user));
  }

  registerUser = (value: { email: string; password: string }) => {
    return this.http
      .post<AuthResData>(`${registerUrl}`, {
        email: value.email,
        password: value.password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          return this.errorHandler(errorRes);
        }),
        tap((resData) => {
          
          this.AuthHandler(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
          
        })
      );
  };

  logUserIn = (data: { email: string; password: string }) => {
    return this.http
      .post<AuthResData>(loginUrl, {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      },
)
      .pipe(
        catchError((errorRes) => {
          return this.errorHandler(errorRes);
        }),
        tap((resData) => {
          this.AuthHandler(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  };

  logUserOut () {
    this.user.next(null!);
    this.router.navigate(['/']);
    localStorage.removeItem('user');
    if(this.tokenExpired) {
      clearTimeout(this.tokenExpired)
    };
    this.tokenExpired = null;
  }

  createPet = (data: {
    name: string;
    type: string;
    age: number;
    image: string;
    description: string;
    owner: string
  }) => {
    console.log(data);
    return this.http.post<IPet>(`${apiUrl}/pets.json`, data);
  };

  getAllPets = () => {
   return this.http.get<any>(`${apiUrl}/pets.json`);
  };

  getSinglePet = (id: any) => {
    return this.http.get<IPet>(`${apiUrl}/pets/${id}.json`);
  };

  deletePet = (id: any) => {
    return this.http.delete(`${apiUrl}/pets/${id}.json`)
  };

  editPet = (data: {
    name: string;
    type: string;
    age: number;
    image: string;
    description: string;
  }, id: any) => {
    console.log(data, '---',id, 'from api service');
    
    return this.http.put<IPet>(`${apiUrl}/pets/${id}.json`, data)
  }

  keepUser() {
    const userData = localStorage.getItem('user');
    if(!userData) {
      this.logUserOut();
    } else {
      const info: {email: string, id: string, _token: string, _tokenExpiration: string} = JSON.parse(userData);
      const keptUser = new User(info.email, info.id, info._token, new Date(info._tokenExpiration));
      
      if(keptUser.token) {
        this.user.next(keptUser);
        const time = new Date(info._tokenExpiration).getTime() - new Date().getTime();
        this.removeUser(time);
      }
    }

  }

  removeUser(expireTime: number) {
   this.tokenExpired = setTimeout(() => {
      this.logUserOut();
    }, expireTime)
  }

}
