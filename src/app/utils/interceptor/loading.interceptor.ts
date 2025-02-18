import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>
{
  const loadingService = inject(LoadingService);
  loadingService.show();

  return next(req).pipe(finalize(() => loadingService.hide()));
};