//variables are containers for storing data

let x,y;
z=x+y;//A variable is declared automatically when used first
let z=15;//irrespective of the actual value,the assigned value here stays final by using let
console.log(z);


var x1=9,y1=0,z1=x1+y1;
//var is also valid but only used while running on old browsers


const a=11,b=10,c=a+b;
c=10;//error will be thorwn as const's value cannot be changed
console.log(c);


//combining both let and const
const p1=77;
const p2=12;
let total=p1+p2;// here,only total's value can be changed


let carName="BMW";//
let carName; // not accepted when let/const is re declared unnecessarily

