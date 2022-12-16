import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Inject the UserService to Use CurrentUser
  constructor( private userService: UserService  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Use CurrentUser
    const user = this.userService.currentUser;
    // when the Token is Valid
    if(user.token) {
      // Clone Makes a New Object from Current Object
      request = request.clone({
        setHeaders: {
          access_token: user.token
        }
      })
    }
    return next.handle(request);
  }
}
