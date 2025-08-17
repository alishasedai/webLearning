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

alert('alisha');
alert('');



