import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'  
})
export class LoadingComponent {
  readonly loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}