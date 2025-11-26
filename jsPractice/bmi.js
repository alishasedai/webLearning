

let calculate = document.querySelector("#Calculate");

calculate.addEventListener("click", (e) => {
    e.preventDefault();
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const results = document.querySelector("#results");
  if(weight === "" || weight <= 0 || isNaN(weight) ){
    results.innerHTML = "Please enter the valid weights";
  } else if (height === "" || height <= 0 || isNaN(height)) {
     results.innerHTML = "Please enter the valid heights";
   }
   else{
    const bmi =( weight / ((height * height) / 10000)).toFixed(3); 
    results.innerHTML =`<Span>Results : ${bmi}</Span>`
   }
})



