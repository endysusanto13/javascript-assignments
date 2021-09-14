let vid = document.querySelector(`#vision-video`);
let playBtn = document.querySelector(`#play-video-btn`);

playBtn.addEventListener("click", () => {
  if (vid.paused) {
    vid.play();
    playBtn.innerHTML = "Pause video"
  } else {
    vid.pause();
    playBtn.innerHTML = "Watch video"
  }
});