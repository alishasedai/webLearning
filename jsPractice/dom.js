const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
boxes.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    let events = e.currentTarget.id;

    // if(events === "red"){
    //     body.style.backgroundColor = "red";
    // }
    //  if(events === "blue"){
    //     body.style.backgroundColor = "blue";
    // }
    //  if(events === "pink"){
    //     body.style.backgroundColor = "pink";
    // }
    //  if(events === "yellow"){
    //     body.style.backgroundColor = "yellow";
    //     body.style.color = "green"
    // }
    //   if(events === "purple"){
    //     body.style.backgroundColor = "purple";
    //      body.style.color = "red"
    // }

    switch (events) {
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "purple":
        body.style.backgroundColor = "purple";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      case "pink":
        body.style.backgroundColor = "pink";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;
    }
  });
});
