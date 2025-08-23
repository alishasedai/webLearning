
async function getSongs(){
    
let a = await fetch("http://127.0.0.1:5500/spotify/songs/");
let response = await a.text();
console.log(response);
let div = document.createElement("div");
div.innerHTML = response;
let as = div.getElementsByTagName("a");

console.log(as);
let songs = [];

for(let index = 0; index<as.length; index++){
    const element = as[index];

    if(element.href.endsWith(".mp3")){
songs.push(element.href)
    }}
return songs;
}

getSongs().then(songs =>
    console.log(songs)
) // or

/*async function main() {
    const songs = await getSongs();
    console.log(songs); // यहाँ songs को actual array देखिन्छ
}

main(); // wrapper function call
*/