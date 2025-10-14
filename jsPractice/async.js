function getData(id){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log(" data " + id);
            resolve("success");
         }, 2000)
    })
   
}
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

}
getAllData()