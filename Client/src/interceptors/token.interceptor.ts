import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.search('login') === -1 && request.url.search('register')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.storage.get('jwt')}`
        }
      });
    }

    request = request.clone({
      setHeaders: {
        'api-key': ''
      }
    });

    return next.handle(request).pipe(tap(((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
      }
    })));
  }



}