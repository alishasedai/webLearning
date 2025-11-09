const { title } = require("process");

function getData(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    if(name==''){
        let nameError = document.getElementById("nameError")
        nameError.innerHTML = "name is required";
        nameError.style.color = "red"
        
    }
    else{
        nameError.innerHTML="";
    }

    let email = document.getElementById("email").value;
    if (email == "") {
      let emailError = document.getElementById("emailError");
      emailError.innerHTML = "email is required";
      emailError.style.color = "red";
    } else {
      emailError.innerHTML = "";
    }
      let phone = document.getElementById("phone").value;
      if (phone == "") {
        let phoneError = document.getElementById("phoneError");
        phoneError.innerHTML = "phone Number is required";
        phoneError.style.color = "red";
      } else {
        phoneError.innerHTML = "";
      }
}

let jobs = [
  { id: 1, title: "Javascript developer", expDate: "2026-02-10" },
  { id: 2, title: "python developer", expDate: "2026-05-14" },
  { id: 3, title: "Java developer", expDate: "2025-10-13" },
  { id: 4, title: "React developer", expDate: "2025-06-17" },
];