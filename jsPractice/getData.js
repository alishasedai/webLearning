function getData(dataId, callback){
    
    setTimeout(() => {
        console.log(`Data ${dataId} `);
        callback();
    },4000)
}
getData(10, () => {
    getData(20, ( )=> {
        getData(30, () => {

        })
    })
})