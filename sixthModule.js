const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//   <span class="chip">${keypressCounter}</span>
//   <ul>
//   <li><b>Event</b>: ${type}</li>
//   <li><b>Key</b>: ${key}</li>
//   <li><b>Code</b>: ${code}</li>
//   </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// mango.showUsername();

// BigInt.addEventListener("click", mango.showUsername.bind(mango));

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("Click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was remove from btn");
// });

// const singleBtn = document.querySelector("#single");
// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// const multiBtn = document.querySelector("#muliple");
// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quits ante.
// Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
// <a class="link" href="#">Read more...</a>`;

// article.innerHTML += htmlString;

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// console.log(markup);

// list.innerHTML = markup;

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const text = document.querySelector(".text");
// text.remove();

// const list = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.append(firstItem);

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);

// const image = document.querySelector(".image");

// console.log(image.attributes);
// console.log(image.hasAttribute("src"));
// console.log(image.getAttribute("alt"));

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt"));

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent);

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to Bahamas!";
// console.log(titleEl.textContent);

// const image = document.querySelector(".image");
// console.log(image.src);
// console.log(image.alt);

// image.src = "https://piscum.photos/id/13/640/480";
// image.alt = "River bank";

// console.log(image.src);
// console.log(image.alt);
