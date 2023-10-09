
//const has block scope
function diff(){
    const x=10,y=9,z=x-y;
    console.log(z);
}
//x cannot be used here as the block is closed


//const cannot be reassigned
const a=10,b=a*a;
b=10;//error will be thrown due to this reassignemnt
console.log(b);

//const cannot be redeclared
const p1="abhi";
const p1;//Error