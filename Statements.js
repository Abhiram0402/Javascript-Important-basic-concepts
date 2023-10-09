//The programming instructions are called statements


//let
let x,y,z; //declaring
x=5;//assigning the values
y=9;
z=x+y;//performing an arithmatic operation
console.log(z);


//let
let a=7;b=8;c=a+b;
console.log("The value of c :",c);

//let
let person="Bro";
console.log(person);


//var
var person1= "BRO";
console.log(person1);

//const
const person3="Abhi";
console.log(person3);


//if statement
let age=20;
if(age>=18){
    console.log("Youre eligible to vote");

}
else{
    console.log("Youre not");
}


//switch and for
let grades = [100, 90, 80,55];

for (let i = 0; i < grades.length; i++) {
  switch (true) {
    case grades[i] >= 90:
      console.log("Best");
      break;
    case grades[i] < 90:
      console.log("Good");
      break;
    default:
      console.log("You need to improve");
  }
}

