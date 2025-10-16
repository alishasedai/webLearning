const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


  const dropdowns = document.querySelectorAll(".dropdown select") ;

  for(let select of dropdowns ){
    for (currCode in countryList) {
        let newOPtion = document.createElement("option");
        newOPtion.innerText = currCode;
        newOPtion.value = currCode
        select.append(newOPtion)
    }
  }