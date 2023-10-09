//A function is a block of code designed to perform a particular task

function sum(p1,p2){
    p1=3,p2=6;
    return p1+p2;//9
}


//invoking a function

let x= myFunction(2,3); //6
function myFunction(p1,p2){
    return p1*p2;
}


//Code reusability using functions
 
let a=12,b=13;
let c=(a+b)*b;

let m= multi(2,10);
function multi(a,b){
    return a*b;//usage of the same variables inside the function

}
