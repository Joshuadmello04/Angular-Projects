import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: false,
})
export class PowerPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    let res = value
    if(args.length!=0)
    {
      if(args[0]==0)
        res =1;
      else{
        for(let i=1;i<=args[0];i++)
          {
            res = res*value;
          }
      }
    }
    return res;
  }
}
