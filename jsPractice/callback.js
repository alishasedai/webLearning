function hello(call){
    console.log("hello")
    call(); 
}
function done(){
    console.log("done")
}
setTimeout(() =>{
    
    hello(done)
    
}, 5000)