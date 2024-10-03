function sayHi() {
  console.log("Hello, this is my first fucntion!");
}

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 1) {
//     continue;
//   }

//   console.log("Парне i: ", i);
// }

// console.log("-------------");

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i);
// }

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     continue;
//   }
//   if (i === 6) {
//     console.log("Знайшли число 6, перериваємо виконання циклу");
//     continue;
//   }
//   if (i === 9) {
//     console.log("Знайшли число 9, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const max = 10;

// for (let i = 0; i <= max; i += 1) {
//   console.log(`${max} % ${i}= `, max % i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += 1;
//   console.log(sum);
// }

// console.log(sum);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ваш пароль: ", password);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let counter = 0;

// while (counter <= 10) {
//   console.log("Counter: ", counter);
//   counter += 1;
// }

// if (true) {
//   const value = 5;
//   console.log("Block scope: ", value);
// }

// console.log("Global scope: ", value);

// let cost;
// const subscription = "good";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

// const age = 20;

// const type = age >= 21 ? "adult" : "child";
// console.log(type);

// const age = 20;
// let result;

// result = age > 10 && age < 30;
// console.log(result);
// result = age > 10 || age < 30;
// console.log(result);
// result = age > 20 && age < 30;
// console.log(result);
// result = age > 20 || age < 30;
// console.log(result);
// result = age > 20 && age < 10;
// console.log(result);
// result = age > 20 || age < 10;
// console.log(result);

// const productName = "Repair droid";
// console.log(productName.slice(0, 4));
// console.log(productName.slice(3, -1));
// console.log(productName.slice(0, productName.length));
// console.log(productName.slice(7, productName.length));

// const cssFileName = "style.css, about.css, index.css";
// const minifiedCssFileNames = cssFileName.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames);

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to"));
// console.log(message.indexOf("e"));
// console.log(message.indexOf("a"));

// const guestName = "Mango";
// const roomNumber = 207;
// let greeting;

// greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;

// console.log(greeting);

// console.log(Math.floor(1.7));
// console.log(Math.ceil(1.2));

// console.log(Math.round(1.2));
// console.log(Math.round(1.5));

// console.log(Math.max(20, 10, 50, 40));
// console.log(Math.min(20, 10, 50, 40));

// console.log(Math.pow(2, 4));

// console.log((0.17 + 0.24).toFixed(2));

// const validNumber = Number("51");
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("qweqwe");
// console.log(Number.isNaN(invalidNumber));

// console.log(Number.parseInt("5px"));
// console.log(Number.parseInt("12qwe74"));
// console.log(Number.parseInt("12.46qwe79"));
// console.log(Number.parseInt("qwerty"));

// console.log(Number.parseFloat("5px"));
// console.log(Number.parseFloat("12qwe74"));
// console.log(Number.parseFloat("12.46qwe79"));
// console.log(Number.parseFloat("qwerty"));

// const valueA = "5";
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(Number(valueB));
// console.log(typeof Number(valueB));
// console.log(typeof valueB);
