let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songInfo = document.getElementById("songinfo");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let previewPic = document.getElementsByClassName("previewPic");
let songs = [
  {
    songName: "Koi Tumsa Nahin-Krrish",
    filePath: "1.mp3",
    coverPath: "covers/1.0.jpg",
  },
  {
    songName: "De Ijazat-Faisu",
    filePath: "2.mp3",
    coverPath: "covers/2.0.jpg",
  },
  {
    songName: "Dil Jaaniye-Love",
    filePath: "3.mp3",
    coverPath: "covers/3.0.jpg",
  },
  {
    songName: "KINNA SONA-LOFI",
    filePath: "4.m4a",
    coverPath: "covers/4.0.jpeg",
  },
  {
    songName: "Maine Khudko-RaginiMMS2",
    filePath: "5.m4a",
    coverPath: "covers/5.0.jpg",
  },
  {
    songName: "Goonja Sa Hai Koi Iktara",
    filePath: "6.mp3",
    coverPath: "covers/6.0.jpg",
  },
  {
    songName: "Aaja We Mahiya-I.Khan",
    filePath: "7.m4a",
    coverPath: "covers/7.0.jpeg",
  },
  {
    songName: "Ishq v Kiya re Maula",
    filePath: "8.mp3",
    coverPath: "covers/8.0.jpg",
  },
  {
    songName: "Love Me Like You Do",
    filePath: "9.m4a",
    coverPath: "covers/9.0.jpg",
  },
  {
    songName: "Love You Zindegi",
    filePath: "10.mp3",
    coverPath: "covers/10.0.jpg",
  },
  {
    songName: "Jaan Nisar",
    filePath: "11.mp3",
    coverPath: "covers/11.0.jpeg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
//Handle Play & Pause
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");

      audioElement.src = `${songIndex + 1}.mp3`;
      songInfo.innerText = songs[songIndex].songName;

      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `${songIndex + 1}.mp3`;
  songInfo.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `${songIndex + 1}.mp3`;
  songInfo.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = 1;
});

//Background Music Room Change
let bgimg = document.getElementsByTagName("body")[0];
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let bgImages = [
  "bg1.gif",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.gif",
  "bg7.jpg",
  "bg8.gif",
];
let bgIndex = 0;

rightArrow.addEventListener("click", () => {
  bgIndex = (bgIndex + 1) % bgImages.length;
  bgimg.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
});

leftArrow.addEventListener("click", () => {
  bgIndex = (bgIndex - 1 + bgImages.length) % bgImages.length;
  bgimg.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
});

//about section

let about = document.getElementById("about");
let aboutInfo = document.getElementsByClassName("aboutInfo")[0];
about.addEventListener("mouseenter", () => {
  aboutInfo.style.opacity = 1;
});
about.addEventListener("mouseleave", () => {
  aboutInfo.style.opacity = 0;
});
