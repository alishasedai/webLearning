function hello(call){
    
    console.log("Starting..")
   setTimeout(() => {
    console.log("hello");
    setTimeout(() =>{
         call(); 

    },2000)
   },3000)
}
function done(){
    console.log("done")
}

    hello(done)
    


// function greet (callback){
//     console.log("Good morning")
//     setTimeout(() => {
//         callback()
//     },2000)

// }
// function asking(){
//     console.log("How are you?")
// }
// setTimeout( () => {
//     greet(asking)
// }, 4000)

// function result(a,b)
// {
//     return a +b ;

// }
// function calculate(x,y,callback){
//     console.log("calculating..")
//     setTimeout(() =>{
//         let res = callback(x,y)
//         console.log("Sum is :" +res)
        
//     }, 4000)
// }
// calculate(5,6,result)


