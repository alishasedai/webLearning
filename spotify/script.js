console.log("Lets write javascript");
 let currentSong = new Audio();
   let songUL;

 function secondsToMinutesSeconds(seconds){
    if(isNaN(seconds) || seconds<0){
        return "Invalid Input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`
 }

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


const playMusic = (track, pause=false)=>{
    // let audio = new Audio("songs/" +track)
    currentSong.src = "songs/" +track
    // audio.play() 
    if(!pause){
    currentSong.play();
    play.src = "./img/pause.svg";
    }
    
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
document.querySelector(".songtime").innerHTML = "00:00 / 00:00";


    
    

}

async function main() {
   
    //get the list of all the songs
    let songs = await getSongs();
    playMusic(songs[0], true)
    // console.log(songs); // यहाँ songs को actual array देखिन्छ

    // show all the songs in the playlist
  songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
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

    // listen for timeUpdate event

    currentSong.addEventListener("timeupdate", ()=>{
        console.log(currentSong.currentTime, currentSong.duration );
        document.querySelector(".songtime").innerHTML = `
        ${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration ) *100 + "%"
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click" , e=>{
        let percent = (e.offsetX/ e.target.getBoundingClientRect().width) * 100;
    
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent)/100

    })

    // Add an eventListener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0"
    })

    //Add event listener for close buttons

    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-110%";
    })

    // Add an event listener to previous and next
    previous.addEventListener("click", ()=>{
        console.log("previous clicked")
        

         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        
        

        if((index-1)  >= 0)
        playMusic(songs[index-1])
    })

    next.addEventListener("click", ()=>{
        
        console.log("next clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        
        console.log(songs, index);

        if((index+1) < songs.length-1)
        playMusic(songs[index+1]);
    })  

    // add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        console.log("Setting volume to", e.target.value, "/100")
        currentSong.volume = parseInt(e.target.value)/100
    })
}
main(); // wrapper function call

