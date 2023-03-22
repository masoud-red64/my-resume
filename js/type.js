// let typed = new Typed(".animated-text", {
// strings: [
//   "۲۲ ساله",
//   "فرانت اند",
//   "طراح سایت",
//   "توسعه دهنده وب",
//   "مسلط به Html,css,js,react",
// ],
// typeSpeed: 60,
// backSpeed: 20,
// loop: true,
// loopCount: Infinity,
// startDelay: 500,
// });

let textTitle = document.querySelector(".animated-text");

let typewriter = new Typewriter(textTitle, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("۲۲ ساله")
  .pauseFor(1000)
  .deleteAll()
  .typeString("فرانت اند")
  .pauseFor(1000)
  .deleteAll()
  .typeString("طراح سایت")
  .pauseFor(1000)
  .deleteAll()
  .typeString("توسعه دهنده وب")
  .pauseFor(1000)
  .deleteAll()
  .typeString("مسلط به Html")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("Css")
  .pauseFor(1000)
  .deleteChars(3)
  .typeString("Js")
  .pauseFor(1000)
  .deleteChars(2)
  .typeString("React")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(1000)
  .start();
