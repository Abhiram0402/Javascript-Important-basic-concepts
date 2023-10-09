//syntax are a set of rules


var x=10;let y=9; //accepted way of declaring two different keywords using ;
let z=x+y;
console.log(z);

var a=10,let b=9; //cannot declare different keywords using ,
let c=a*b;
console.log(c);


let a1=10,b1=9,c1=a+b; //accepted as all are of the same keyword
//let c=a*b;
console.log(c1);



//camel case
let firstname="Abhi";//Upper came case 
let FirstName="Abhi";//Lower camel case


//JS is case sensitive
let lastName="Ram";
let lastname="Ram";//Both are different



//JS syntax does not allow spaces or hypens while declaring
let first name="X";//error
let last-letter="Y";//error
let first_name="Abhi";//accepted syntax


//numbers are not allowed to begin first
let 1abhi="ram";//error
let abhi1="ram";//accepted

