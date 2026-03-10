import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: false,
})
export class SquarePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    return value*value;
  }
}
