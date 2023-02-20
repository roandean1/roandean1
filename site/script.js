const EL_video = document.querySelector("#video");
const EL_play = document.querySelector("#play");

EL_play.addEventListener("click", () => {
  const isPaused = EL_video.paused;
  EL_video[isPaused ? "play" : "pause"]();
  EL_video.classList.toggle("u-none", !isPaused);
});
#video {width: 300px;}

/* Utility classes: */
.u-none {display: none;}
<button id="play">Toggle &amp; play</button><br>
<video id="video" class="u-none">
  <source src='http://vjs.zencdn.net/v/oceans.mp4' type='video/mp4'>
</video>
