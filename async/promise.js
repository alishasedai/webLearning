// async function getDAta(){
//     return new Promise((resolve, reject)=>{

//         setTimeout (()=>{
//                 resolve(455)
//         },3500)
//     })
// }


// async function getDAta(){
//    let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data = await x.text()
//      console.log(data)
//     //  return 4500
//     }
// async function main(){
// console.log("Loading modeules");

// console.log("Do something else");

// console.log("Load Data");


// let data = await getDAta();
// console.log(data);

// console.log("Processing data");
// console.log("Task 2");
// }
// main();

let a = prompt('Enter a 1st number');
let b = prompt('Enter a 2nd number ');
let sum = parseInt(a)+ parseInt(b);

if(isNaN(a) || isNaN(b)){
  throw SyntaxError("Sorry this is not allowd");
}

// try{
//   console.log(sum);
// }
// catch(error){
//   console.log("Error agaya Alisha");
// }
try{
  console.log(sum*.x);
}


catch(error){
    // console.log("Error agaya Alisha");
    alert(error.name);
    alert(error.message);
    alert(error.stack);
}