// let p = new Promise((resolve, reject) => {
//      console.log("okay oi am");
//      reject("some error")
// })

const getPromise = () =>{
    return new Promise((resolve, reject) => {
        // resolve("success")
        reject("Network error occurred")
    })
};
let pr = getPromise();
pr.then(() => {
    console.log("Promise fulfilled")
})
pr.catch( (err) => {
    console.log("Eroorrr " +err)
})

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
 setTimeout(() => {
        // console.log("data", dataId)
        // resolve("Success")
        reject("error occurred")
        if(getNextData){
            getNextData();
        }
    }, 3000)
    })
   
}
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4) 
//         })
//     })
// })
   
