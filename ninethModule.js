const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!
			${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

//   console.log(timerId);
// };

// button.addEventListener("click", onClick);
