import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: false,
  pure:false
})
export class CubePipe implements PipeTransform {
  transform(val: number, ...args: unknown[]): number {
    return val*val*val;
  }
}
