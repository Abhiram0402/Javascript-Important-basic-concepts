const userleft=true;
const userIsWatching=true;

let p=new Promise((resolve,reject) => {
    let a=1+1;
    if(a==2){
        resolve('success')
    }
    else{
        reject('failed')

    }
    })
    p.then((message) => {
     console.log("This is in the then" + message)
    }).catch((message)=>{
        console.log("This is in the catch")
    })



    function somePromise(){
        return new Promise((resolve,reject) =>{
            if(userleft){
                reject({
                    name:"User left",
                    message:":("
                })
            }
            else if(userIsWatching){
                reject({
                    name:"User is still watching",
                    message:":)"
                })
            }
            else{
                resolve("Thums up and subscribe")
            }


        })
    }
    somePromise().then((message){
        console.log("Success"+message)
    }).catch((error) =>{
        console.log(error.name+" "+error.message)
    })