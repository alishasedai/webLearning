function getData(data, call){
    console.log("data "+data)
    setTimeout(() => {
        call();
    },3000)

}

function getData1(data) {
  console.log("data " + data);
}
setTimeout(()=>{
    getData(123 , () => {
        getData1(124);
    });
},3000)


