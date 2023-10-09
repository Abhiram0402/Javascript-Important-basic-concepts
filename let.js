let x="Abhi";
let x;// cannot be redeclared


//Let has block scope
function sum(){
    let x=1,y=2;
    let z=x+y;
    console.log(z);
}
//x cannot be accessed outside the block


//Let can be reassigned
let a=13,b=16,c=a+b;
c=19;
console.log(c);//c=19 will be the output as value of c is reassigned after the operation is performed
