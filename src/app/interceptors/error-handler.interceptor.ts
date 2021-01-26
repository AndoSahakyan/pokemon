import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      if (response.status == 404) {
        Swal.fire(response.error, response.message, 'error');
        let location = this.injector.get(Location);
        location.back();
      }
    }
    throw response;
  }
}
