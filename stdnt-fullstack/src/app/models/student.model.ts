export class Student{
  regNo!:number;
  rollNo!:number;
  name!:string;
  school!:string;
  standard!:number;
  gender!:string;
  result!:boolean;
  percentage!:number;
}

/*
The ! is called the Definite Assignment Assertion Operator.

It tells TypeScript:

“Trust me, this variable will be assigned a value later.”

So TypeScript won't complain that it's uninitialized.
*/