function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
}

registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

registerGuest("Манго", function notify(name) {
  console.log(`Шановний ${name} ваш номер буде готовий через 30 хвилин.`);
});

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// console.log(greet("Maks"));

// console.log(greet);
