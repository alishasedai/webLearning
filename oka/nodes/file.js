const fs = require("fs");
console.log(fs);

console.log("starting");

// fs.writeFileSync("alsa.txt", "Alisha is a sedai");
fs.writeFile("alsa2.txt" , "Alsa2 is a sedai 2", () => {
    console.log("done");

    fs.readFile("alsa2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})
fs.appendFile("alsa2.txt", "alsarobo", (e, d) => {
    console.log(d)
})
    


console.log("ending");