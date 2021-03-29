import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { debounceTime, delay, finalize } from 'rxjs/operators'
import { LoaderService } from '../../services/loader.service'

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.loaderService.show()

    return next.handle(req).pipe(
      delay(600),
      debounceTime(10000),
      finalize(() => this.loaderService.hide()),
    )
  }
}
