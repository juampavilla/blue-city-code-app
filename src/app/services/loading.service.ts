import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {}
  
  public show(): void {
    this.loadingSubject.next(true);
  }
  
  public hide(): void {
    this.loadingSubject.next(false);
  }
}