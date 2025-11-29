const userInput = document.getElementsByClassName("userPassword")[0];
const totalChars = document.getElementById("consistLength");
const upperLetter = document.getElementById("upperLetter");
const lowerLetter = document.getElementById("lowerLetter");
const symbols = document.getElementById("symbol");
const numbers = document.getElementById("numbers");
const generate = document.getElementById("generate");
console.log(totalChars.value);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const nums = "1234567890";
const symb = "!@#$%(^&*)_+-?><,.";

const getRandom = (data) => {
  let randomNumber = parseInt(Math.random() * data.length);
 return data[randomNumber];
};

generate.addEventListener("click", () => {
  generatePassword();
});
const generatePassword = (passwords = "") => {
    
  if (upperLetter.checked) {
    passwords += getRandom(upper);
   
  }
   userInput.value = passwords;

    if (lowerLetter.checked) {
      passwords += getRandom(lower);
    }
    userInput.value = passwords;
    
    if (symbols.checked) {
      passwords += getRandom(symb);
    }
    userInput.value = passwords;

    
    if (numbers.checked) {
      passwords += getRandom(nums);
    }
    userInput.value = passwords;

    if(passwords.length < totalChars.value){
        return generatePassword(passwords);
    }
};
