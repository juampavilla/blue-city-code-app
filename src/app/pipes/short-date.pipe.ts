import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate',
  standalone: true
})
export class ShortDatePipe implements PipeTransform {

  transform(value: Date | string | null): string {
    if (!value) return '';

    const date = typeof value === 'string' ? new Date(value) : value;

    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}