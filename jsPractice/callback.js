// function hello(call){
//     console.log("hello")
//    setTimeout(() => {
//      call(); 
//    },3000)
// }
// function done(){
//     console.log("done")
// }
// setTimeout(() =>{
    
//     hello(done)
    
// }, 5000)

function greet (callback){
    console.log("Good morning")
    setTimeout(() => {
        callback()
    },2000)

}
function asking(){
    console.log("How are you?")
}
setTimeout( () => {
    greet(asking)
}, 4000)



