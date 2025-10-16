const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


  const dropdowns = document.querySelectorAll(".dropdown select") ;

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
  

 