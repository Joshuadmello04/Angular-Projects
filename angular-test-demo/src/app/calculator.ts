export class Calculator{

    constructor(){
        console.log("Caculator object created")
    }
    add(a:number,b:number){
        return a+b;
    }
    sub(a:number,b:number){
        return a-b;
    }
    mul(a:number,b:number){
        return a*b;
    }
    div(a:number,b:number){
        return a/b;
    }
}