const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// song title
const songs = ["Chosen one", "Deep wounds", "Through the storm", "My brother"];

// keep track of whatever song thats playing
let songIndex = 3;


// initially load song details
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `musics/${song}.mp3`;
    cover.src = `music-images/${song}.png`;
    
}


playBtn.addEventListener("click", () => {
    if (musicContainer.classList.contains("play")) {
        pauseSong()
    }else{
        playSong()
    }
})

// we then create the pauseSong and playSong fxns

function playSong() {
    musicContainer.classList.add("play")
    // we remove the play icon
    playBtn.querySelector("i.fas").classList.remove("fa-play")
    // add pause button
    playBtn.querySelector("i.fas").classList.add("fa-pause")
    // then add the play method
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    audio.pause()
    
}


prevBtn.addEventListener("click", () => {
    songIndex--
    if (songIndex < 0) {
       songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
})

nextBtn.addEventListener("click", () => {
    songIndex++
    if (songIndex > songs.length - 1) {
       songIndex = 1
    }

    loadSong(songs[songIndex])
    playSong()
})

// for the song Progress

audio.addEventListener("timeupdate", (e) => {

     const {duration, currentTime} = e.srcElement;
     const progresspercent = (currentTime / duration) * 100;
     progress.style.width = `${progresspercent}%`;
})


// to manually update the song time

progressContainer.addEventListener("click", (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    
})





































































