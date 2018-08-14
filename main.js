var playPause = anime({
  targets: "div.box",
  translateY: [{ value: 200, duration: 1200 }, { value: 0, duration: 1000 }],
  translateX: [{ value: 100, duration: 1200 }, { value: 0, duration: 1000 }],
  rotate: {
    value: "1turn",
    ease: "easeInOutSine"
  },
  // backgroundColor: "#000",
  opacity: 0.3,
  delay: function(el, i, l) {
    return i * 1000;
  },

  autoplay: false,
  loop: true,

  translateY: 150,
  direction: "alternate",
  loop: true,
  delay: function(el, i, l) {
    return i * 200;
  }
});
// playPause.pause();

// document.querySelector("#boxes .play").onclick = playPause.play;
// document.querySelector("#boxes .pause").onclick = playPause.pause;

document.querySelector("#boxes .play").onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;
