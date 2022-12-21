import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor{

    constructor(private apiService: ApiService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
       return this.apiService.user.pipe(
            take(1),
            exhaustMap(user => {
            const request = req.clone({params: new HttpParams().set('auth', user?.token as any)})
                return next.handle(request)
            })
        )
    }
}