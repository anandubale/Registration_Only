
// const printhello = () =>{

//  return new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         return resolve("hello");
//     }, 3000);
//     console.log("hii");

//  })

// }

// printhello().then((result)=> {console.log(result);})
// .catch((error)=>{console.log(error);})



// function sleep(amount){
//     return new Promise ((resolve,reject)=> {
//         if(amount <= 300){
//             return reject("wrong");   
//         }
//         setTimeout(() => {
//             resolve(`Slept for ${amount}`)   
//         }, amount);
//     })
// }


// sleep(500)
// .then((result)=> {console.log(result); return sleep(1000);})
// .then((result) => {console.log(result); return sleep(750);})
// .then((result) => {console.log(result); console.log("Done")})





// const project_promise = new Promise((resolve,reject)=>{
//     let flag = true;
//     if(flag){
//         resolve("done");
//     }
//     else{
//         reject("not done");
//     }
// })

// project_promise
// .then(function(resolve) {
//     console.log("project is " + resolve);
// })
// .catch(function(reject) {
//     console.log("project is " + reject);
// })


// const passORfail = new Promise((resolve,reject)=>{
//     const marks = 45;
//     if(marks > 35) {
//         resolve();
//     }
//     else{
//         reject();
//     }
// })

// passORfail
// .then(()=>{console.log("PASS!!");})
// .catch(()=>{console.log("FAIL");})