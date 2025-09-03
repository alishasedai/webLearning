// console.log("Lets write javascript");
let currentSong = new Audio();

let songs = [];
let songUL;
let currFolder;
let cardContainer = document.querySelector(".cardContainer");

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "Invalid Input";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
  currFolder = folder;

  // let a = await fetch(`http://127.0.0.1:5500/songs/${folder}`);
  let a = await fetch(`songs/${folder}/`);
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  // console.log(as);
  songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];

    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${folder}/`)[1]);
    }
  }
  // play the first songs


  // show all the songs in th playlist
  songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML += `<li>
       
                    <img class="invert" src="./img/music.svg" alt="music">
                    <div class="info">
                        <div> ${song.replaceAll("%20", " ")}</div>
                        <div>Song artist</div>
                    </div>
                   <div class="playnow">
                    <span>Play now</span>
                     <img class="invert" src="./img/play.svg" alt="">
                   </div></li>`;
  } //attach an event listener to each songs
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
  return songs
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("songs/" +track)
  currentSong.src = `songs/${currFolder}/` + track;
  // audio.play()
  if (!pause) {
    currentSong.play();
    play.src = "./img/pause.svg";
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
  //    let a = await fetch(`http://127.0.0.1:5500/spotify/songs/`);
  let a = await fetch("./songs/");

  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  console.log(anchors);
  let array = Array.from(anchors);

  for (let index = 0; index < array.length; index++) {
    const e = array[index];

    if (e.href.includes("/songs/")) {
      let fold = e.href.split("/").splice(-1)[0];

      // console.log("Extracted folder:", fold);

      // get the metadata of the folder
      let a = await fetch(`./songs/${fold}/info.json`);
      let response = await a.json();
      console.log(response);

      cardContainer.innerHTML += `
  <div data-folder="${fold}" class="card">
    <div class="play">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <rect width="24" height="24" fill="#1fdf64" />
        <circle cx="12" cy="12" r="10" stroke="1fdf64" stroke-width="1.5" fill="white"/>
        <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
      </svg>
    </div>
    <img src="songs/${fold}/cover.jpg" alt="Cover Image" />
    <h4>${response.title}</h4>
    <p>${response.description}</p>
  </div> `;
      // Load the playlist whenever the card is clicked
      Array.from(document.getElementsByClassName("card")).forEach((e) => {
        e.addEventListener("click", async (item) => {
          // console.log(item, item.target.dataset)
          songs = await getSongs(`${item.currentTarget.dataset.folder}`);
          playMusic(songs[0])
        });
      });
    }
  }
}

async function main() {
  await getSongs("ncs");

  playMusic(songs[0], true);
  //display all the album on the page
  displayAlbums();

  // Attach an event Listener to play, next and previous songs
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "./img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "./img/play.svg";
    }
  });

  // listen for timeUpdate event

  currentSong.addEventListener("timeupdate", () => {
    // console.log(currentSong.currentTime, currentSong.duration );
    document.querySelector(".songtime").innerHTML = `
        ${secondsToMinutesSeconds(
          currentSong.currentTime
        )} / ${secondsToMinutesSeconds(currentSong.duration)}`;

    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  // Add an eventListener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  //Add event listener for close buttons

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-110%";
  });

  // Add an event listener to previous and next
  previous.addEventListener("click", () => {
    // console.log("previous clicked")
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) playMusic(songs[index - 1]);
  });
  // add am event listener to next
  next.addEventListener("click", () => {
    // console.log("next clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    // console.log(songs, index);
    if (index + 1 < songs.length - 1) playMusic(songs[index + 1]);
  });

  // add an event to volume
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
        
      console.log("Setting volume to", e.target.value, "/100");
      currentSong.volume = parseInt(e.target.value) / 100;
    });

    // Add an event listener to mute the track
 document.querySelector(".volume>img").addEventListener("click", (e) => {
   let img = e.target;
   console.log("Current src:", img.src);

   if (img.src.endsWith("volume.svg")) {
     img.src = "./img/mute.svg";
     currentSong.volume = 0;
     document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
     
   } else {
     img.src = "./img/volume.svg";
     currentSong.volume = 0.1; // or any default volume
     document
       .querySelector(".range")
       .getElementsByTagName("input")[0].value = 10;
   }
 });

}
main(); // wrapper function call
