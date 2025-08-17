// 

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewNum;
    if (views < 1000) {
        viewNum = views; // direct number
    } else if (views >= 1000000) {
        viewNum = Math.floor(views / 1000000) + "M"; // million
    } else {
        viewNum = Math.floor(views / 1000) + "K"; // thousand
    }

    let html = `
      <div class="card">
          <div class="image">
              <img src="${thumbnail}" alt="">
              <div class="capsule">${duration}</div>
          </div>
          <div class="text">
              <h1>${title}</h1>
              <p>${cName} · ${viewNum} views · ${monthsOld} months ago</p>
          </div>
      </div>`;

    document.querySelector(".container").insertAdjacentHTML("beforeend", html);

}

createCard(
  "Introduction to Backend | Sigma web dev video #3",
  "Code with Harry",
  56000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);

