//The values are written as name:value 

const car={model:"BMW", year:"2020",color:"Blue"};

const personn={name:"Abhiram",age:"22",height:"6'1",location:"Bengaluru"};
//the other way of defining the same object:
const person={
    name:"Abhiram",
    age:"22",
    height:"6'1",
    location:"Bengaluru"
};


//objects methods

const person1={
    name:"Abhiram",
    age:"22",
    height:"6'1",
    location:"Bengaluru",
    details: function(){
        return this.name+" is from"+ this.location; //Abhiram is from bengaluru
    }
};  
