
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
songs.push(element.href.split("/songs/")[1])
    }}
return songs;
}

getSongs().then(songs =>
    console.log(songs)
) // or

async function main() {
    //get the list of all the songs
    let songs = await getSongs();
    // console.log(songs); // यहाँ songs को actual array देखिन्छ

    // show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for(const song of songs ){
        songUL.innerHTML += `<li>
       
                    <img class="invert" src="./img/music.svg" alt="music">
                    <div class="info">
                        <div> ${song.replaceAll("%20" ," ")}</div>
                        <div>Song artist</div>
                    </div>
                   <div class="playnow">
                    <span>Play now</span>
                     <img class="invert" src="./img/play.svg" alt="">
                   </div></li>`;
    }
    //play the first songs
    // var audio = new Audio(songs[0]);
    // audio.play()


    // audio.addEventListener("loadeddata", ()=>{
        
    //     console.log(audio.duration, audio.currentSrc, audio.currentTime);
    // })
}
main(); // wrapper function call
