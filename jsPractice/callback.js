function hello(call){
    console.log("hello")
   setTimeout(() => {
     call(); 
   },3000)
}
function done(){
    console.log("done")
}
setTimeout(() =>{
    
    hello(done)
    
}, 5000)