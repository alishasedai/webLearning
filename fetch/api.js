const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


  const dropdowns = document.querySelectorAll(".dropdown select") ;
  const btn = document.querySelector("form button")
  const fromCurr =document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  for(let select of dropdowns ){
    for (currCode in countryList) {
        let newOPtion = document.createElement("option");
        newOPtion.innerText = currCode;
        newOPtion.value = currCode
        if(select.name ==="from"  && currCode === "USD"){
            newOPtion.selected = "selected"
        }
        else if (select.name === "to" && currCode === "INR"){
            newOPtion.selected = "selected";
        }
          select.append(newOPtion);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
  }

  const updateFlag = (element) => {
    let cur = element.value;
    let countryCode = countryList[cur];  
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
  } 

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtVal =amount.value;
    if(amtVal === " " || amtVal<1 ){
        amtVal = 1
        amount.value = "1"
    }
    console.log(fromCurr.value , toCurr.value)
    // const URL = `${BASE_URL}/${fromCurr}/${toCurr}.json`;
    
  })

 