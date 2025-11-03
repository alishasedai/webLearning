function dateTime(){
    let dt = new Date();
    let l = dt.toLocaleTimeString();
    document.getElementById("time").innerHTML =l
}
setInterval(dateTime,1000);