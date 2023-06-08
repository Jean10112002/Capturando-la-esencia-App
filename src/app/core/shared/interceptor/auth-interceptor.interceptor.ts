import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../public/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private readonly authService:AuthService,private router: Router,
    ) {}

  intercept(req: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string|null = this.authService.getToken();
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }
    console.log("interceptor")
		return next.handle(request);
	}

}
