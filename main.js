// anime({
//   targets: "div.box.red",
//   translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
//   rotate: {
//     value: "1turn",
//     ease: "easeInOutSine"
//   }
// });
// anime({
//   targets: "div.box.blue",
//   translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
//   rotate: {
//     value: "1turn",
//     ease: "easeInOutSine"
//   }
// });
//
// anime({
//   targets: "div.box.green",
//   translateY: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800, delay: 300 }
//   ],
//   rotate: {
//     value: "2turn",
//     ease: "easeInOutSine",
//     delay: 300
//   }
// });
// anime({
//   targets: "div.box.yellow",
//   translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
//   rotate: {
//     value: "1turn",
//     ease: "easeInOutSine",
//     delay: 300
//   }
// });

var playPause = anime({
  targets: "div.box",
  translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
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
  loop: true
});
// playPause.pause();

document.querySelector("#boxes .play").onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;
