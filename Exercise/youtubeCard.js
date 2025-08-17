function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewNum;
if(views<1000){
  viewNum = views/1000 + "k";
}
  else if(view>1000000){
     viewNum = views/1000000 + "M";
  }
  else{
    viewNum = views/1000 + "K"
  }

    let html = `        <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}. ${viewNum} views . 2 months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard()