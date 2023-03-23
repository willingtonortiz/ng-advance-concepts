import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { USE_BASIC_AUTH, USE_JWT_AUTH } from './tokens';

@Injectable()
export class BasicAuthTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: 'Basic TOKEN',
        },
      })
    );
  }
}

@Injectable()
export class BearerAuthTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: 'Bearer TOKEN',
        },
      })
    );
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.context.get(USE_BASIC_AUTH)) {
      return this.setBasicAuthToken(next, request);
    }

    if (request.context.get(USE_JWT_AUTH)) {
      return this.setJwtAuthToken(next, request);
    }

    return next.handle(request);
  }

  private setJwtAuthToken(
    next: HttpHandler,
    request: HttpRequest<any>
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          BasicAuthorization: 'Bearer TOKEN',
        },
      })
    );
  }

  private setBasicAuthToken(
    next: HttpHandler,
    request: HttpRequest<any>
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          JwtAuthorization: 'Basic TOKEN',
        },
      })
    );
  }
}
