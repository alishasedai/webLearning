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
const generatePassword = (passwords) => {
    let password = "";
  if (upperLetter.checked) {
    password += getRandom(upper);
   
  }
   userInput.value = password;

    if (lowerLetter.checked) {
      password += getRandom(lower);
    }
    userInput.value = password;
    
    if (symbols.checked) {
      password += getRandom(symb);
    }
    userInput.value = password;

    
    if (numbers.checked) {
      password += getRandom(nums);
    }
    userInput.value = password;

    if(password.length <= totalChars.value){
        return generatePassword(password);
    }
};
