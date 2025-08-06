console.log("dom.js initializing");
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() *255);
    let val2 = Math.ceil(0 + Math.random() *255);;
    let val3 = Math.ceil(0 + Math.random() *255);;
    return `rgb(${val1}, ${val2}, ${val3})`;
}

console.log(boxes);

Array.from(boxes).forEach(e=>{
   e.style.backgroundColor = getRandomColor();
   e.style.color = getRandomColor();
})
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").hasAttribute("style"));
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hidden = true);
document.querySelector(".box").innerHTML = "Hey I am Alisha Sedai";

document.querySelector(".box").setAttribute("style", "display : inline ,gap : 45px");
console.log(document.querySelector(".box").getAttribute("style"));

console.log(document.querySelector(".box").attributes)