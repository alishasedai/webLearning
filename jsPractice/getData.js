const URL = "https://catfact.ninja/facts";
// const para = document.querySelector("#f");
// const b = document.querySelector("#click")


console.log("Getting data ......")
// const getFacts = async() => {
//     let p = await fetch(URL);
//     console.log(p)
//  let data =  await p.json();

//  para.innerHTML = data.data[4].fact;
// }



function getFacts(){
    fetch(URL).then((response) => {
        console.log(response.url)
        return response.json()
    }).then((data) => {
        console.log(data)
        console.log(data.data[9] )
    })
}
    
getFacts()
//  b.addEventListener("click", getFacts);/
  
