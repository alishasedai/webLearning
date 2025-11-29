const userInput = document.getElementsByClassName("userPassword")[0];
const upperLetter = document.getElementById("upperLetter");
const loewerLetter = document.getElementById("lowerLetter");
const symbols = document.getElementById("symbol");
const numbers = document.getElementById("numbers");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const nums = "1234567890";
const symb = "!@#$%(^&*)_+-?><,."


const needs = (data) => {
  let randomNumber = parseInt(Math.random() * data.length );
  console.log(data[randomNumber])
}
needs(symb);
needs(lower)

needs(nums)

if(upperLetter.checked){
    needs(upper);
}


