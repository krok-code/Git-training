const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const names = [...students].sort((a, b) => a.score - b.score).map((student) => student.name);
// console.log(names);

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses);
// const sortedByAscendingScore = [...students].sort((a, b) =>
//   a.score - b.score);

// const names = sortedByAscendingScore.map(student => student.name);

// console.log(sortedByAscendingScore)
// console.log(names);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabetOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabetOrder);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReverseOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReverseOrder);
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// const descendingScores = [...scores].sort((a, b) => b - a);

// console.log(scores);
// console.log(ascendingScores);
// console.log(descendingScores);

// const scores = [61, 19, 74, 35, 92, 56];
// const sortScores = scores.sort();
// console.log(sortScores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students);

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// const gettagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = (tags) => tags.reduce(gettagStats, {});
// const tagCount = countTags(tags);

// console.log(tagCount);
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes);

// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(totalScore);
// console.log(averageScore);
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const test = [1, 2, 3, 4, 5];

// const testLog = test.reduce((start, next) => {
//   return start + next;
// }, 0);

// console.log(testLog);

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvailable = fruits.every((fruit) => fruit.amount > 0);
// console.log(allAvailable);

// const anyAvailable = fruits.some((fruit) => fruit.amount > 0);
// console.log(anyAvailable);

// const everyTrue = [1, 2, 3, 4, 5].every((result) => result >= 0);
// console.log(everyTrue);

// const everyFalse = [1, 2, 3, 4, 5, -10].every((result) => result >= 0);
// console.log(everyFalse);

// const train = [1, 2, 3, 4, 5].some((result) => result >= 0);
// console.log(train);

// const oneTrue = [-1, -2, 3, -4, -5].some((result) => result >= 0);
// console.log(oneTrue);

// const noOneTrue = [-1, -2, -3, -4, -5].some((result) => result >= 0);
// console.log(noOneTrue);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const findBlue = colorPickerOptions.find((option) => option.label === "blue");
// console.log(findBlue);

// const findIndexBlue = colorPickerOptions.findIndex((option) => option.label === "blue");
// console.log(findIndexBlue);

// const findRed = colorPickerOptions.find((option) => option.label === "red");
// console.log(findRed);

// const findIndexRed = colorPickerOptions.findIndex((option) => option.label === "red");
// console.log(findIndexRed);

// const findGreen = colorPickerOptions.find((option) => option.label === "green");
// console.log(findGreen);

// const findIndexGreen = colorPickerOptions.findIndex((option) => option.label === "green");
// console.log(findIndexGreen);

// const findGray = colorPickerOptions.find((option) => option.label === "gray");
// console.log(findGray);

// const findIndexGray = colorPickerOptions.findIndex((option) => option.label === "gray");
// console.log(findIndexGray);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter((student) => student.score <= LOW_SCORE);
// console.log(worst);

// const average = students.filter(({ score }) => score >= LOW_SCORE && score <= HIGH_SCORE);
// console.log(average);
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses);
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter((value) => value <= 0);
// console.log(negativeValues);

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const map = students.map((student) => student.courses);
// console.log(map);

// const flatMap = students.flatMap((student) => student.courses);
// console.log(flatMap);
// const planets = ["Земля", "Марс", "Венера", "Сатурн", "Юпітер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase);

// console.log(planets);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poli", score: 59 },
//   { name: "Ajax", score: 42 },
//   { name: "Kivi", score: 79 },
//   { name: "Huston", score: 93 },
// ];

// const names = students.map((student) => student.name);
// const scores = students.map((student) => student.score);

// console.log(names);
// console.log(scores);
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const number = [1, 2, 3, 4, 5];
// const doubleNumbers = pureMultiply(number, 2);

// console.log(number);
// console.log(doubleNumbers);

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3);

// const numbers = (a, b, c) => {
//   return a + b + c;
// };

// const number = (a) => {
//   return a + 20;
// };

// const nothing = () => {
//   console.log("Hi");
// };

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const newNumbers = dirtyMultiply(numbers, 3);
// console.log(newNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index},значення ${number}`);
// };

// numbers.forEach(logMessage);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// repeat(3, printValue);
// repeat(3, prettyPrint);

// function repeatlog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatlog(7);

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
// function processCall(recipient) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте... `);
//   }
// }

// processCall("Mango");

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
// }

// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// registerGuest("Манго", function notify(name) {
//   console.log(`Шановний ${name} ваш номер буде готовий через 30 хвилин.`);
// });

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
