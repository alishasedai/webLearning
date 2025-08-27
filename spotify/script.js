console.log("Lets write javascript");
 let currentSong = new Audio();

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


const playMusic = (track)=>{
    // let audio = new Audio("songs/" +track)
    currentSong.src = "songs/" +track
    // audio.play() 
    currentSong.play()
    play.src = "./img/pause.svg";
    document.querySelector(".songinfo").innerHTML = track;
document.querySelector(".songtime").innerHTML = "00:00 / 00:00";


    
    

}

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

    //attach an event listener to each songs

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
             console.log(e.querySelector(".info").firstElementChild.innerHTML);
             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
       
    })

    // Attach an event Listener to play, next and previous songs
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "./img/pause.svg";
        }
        else{
            currentSong.pause();
            play.src = "./img/play.svg"
        }
    })

}
main(); // wrapper function call
