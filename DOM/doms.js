let a = document.getElementById("heading");
a.innerHTML = "<i><b> Italic </i>"
let b = document.getElementsByTagName("h1");
console.log(b[0].textContent);
console.log(b[1].textContent);

let para = document.getElementsByClassName("para");
console.log(para.textContent);


// innerHtml le chai afno text lai jun wala code lekhya xa ho tesmai tya write 
//gardinxa jastai <i>Italic lekhya xa vaney abo tya italic ma rakdinxa</i>

// ani textcontent le chai afno text kun xa teslai matrai access garxa

// ani ajjai innerText pani hunxa

let o = document.createElement("div");
o.innerText="This is inside the div";
// document.body.appendChild(o);
document.body.append(o);
let mode = document.getElementsByTagName("button");
mode[0].addEventListener('click', f1);
function f1(){
    document.body.style.backgroundColor="red";
}
mode[1].addEventListener('click', function(){
    document.body.style.backgroundColor="wheat";
})

const callback = (arg) =>{
    console.log(arg);
};
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = "ALisha"
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

// alert('alisha');


// Promises

console.log("This is promises");

// let prom1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random number was not supporting you")
//     }
//    else{
//      setTimeout(()=>{
//         console.log("yes i am done")
//         resolve("Alisha");
//     },3000);
//    }
// })
// prom1.then((a) =>{
//     console.log(a)
// }).catch((err) =>{
//     console.log(err);
// })
let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
   else{
     setTimeout(()=>{
        console.log("yes i am done")
        resolve("Alisha");
    },3000);
   }
})


let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 2")
    }
   else{
     setTimeout(()=>{
        console.log("yes i am done 2")
        resolve("Alisha 2");
    },1000);
   }
})
 let p3 = Promise.any([prom1, prom2]);
 p3.then( (a) =>{
    console.log(a)
 }).catch( (e)=>{
    console.log(e);
 })


 


