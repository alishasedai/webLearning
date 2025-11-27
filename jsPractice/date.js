
function dates(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    const time = document.getElementsByTagName("span");
    time.innerHTML=date.toLocaleTimeString();
}
setInterval(dates,1000);