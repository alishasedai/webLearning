// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" data 1")
//             resolve("Success")
//         }, 4000)
//     })   }

// function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data 2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("Fetching data 1...")
// let p = asyncFun().then((res) => {
//         console.log("Fetching data 2...");
//         let p1 = asyncFun1().then((res) => {
//         });
    
// })

// let p = new Promise((resolve, reject) => {
//      console.log("okay oi am");
//      reject("some error")
// })

// const getPromise = () =>{
//     return new Promise((resolve, reject) => {
//         // resolve("success")
//         reject("Network error occurred")
//     })
// };
// let pr = getPromise();
// pr.then(() => {
//     console.log("Promise fulfilled")
// })
// pr.catch( (err) => {
//     console.log("Eroorrr " +err)
// })

function getData(dataId){
   
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success")
      // reject("error occurred")
     
    }, 3000);
 })   
}

getData(1).then((res) => {
    return getData(2)
}).then((res) => {
    return getData(3)
}).then((res) => {
    console.log(res)
})
// let p = getData(1)
// p.then((err) => {
//   console.log(err);

//   let p1 = getData(2);

//   p1.then((err) => {
//     console.log(err);

//     let p2 = getData(3);
//     p2.then((err) => {
//       console.log(err);
    
//     let p3 = getData(4);
//     p3.then((err) => {
//       console.log(err);
//     });
//     });
//   });
// }); 

// console.log("getting data 1 ...")
// getData(1, () => {
//     console.log("getting data 2 ...")
//     getData(2, () => {
//         console.log("getting data 3 ...");
//         getData(3, () => {
//             console.log("getting data 4 ...");
//             getData(4) 
//         })
//     })
// })
   
