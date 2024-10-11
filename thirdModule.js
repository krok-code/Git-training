const rgb = [200, 255, 100];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`);

// const [red, ...colors] = rgb;

// console.log(red);
// console.log(colors);

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red}, G:${green}, B:${blue}, Alfa:${alfa}`);

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red}, G:${green}, B:${blue}`);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// const {
//   title: titleFirst,
//   author: authorFirst,
//   coverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(titleFirst);
// console.log(authorFirst);
// console.log(coverImage);

// function multiply(firstNumber, secondNumber, ...otherNumbers) {
//   console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(otherNumbers);
// }

// multiply(1, 2, 3);

// const firstTemps = [14, -5, 3, 15, 20];
// const lastTemps = [13, 6, 4, 25, 61];

// const copyOfFirstTemps = [...firstTemps];
// const copyOfLastTemps = [...lastTemps];

// const allTemps = [...copyOfFirstTemps, ...copyOfLastTemps];

// console.log(allTemps);

// const temp = [14, -5, 3, 15, 20];

// console.log(...temp);

// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// let totalrating = 0;

// for (const book of books) {
//   totalrating += book.rating;
// }

// const averageRating = (totalrating / books.length).toFixed(1);

// console.log(totalrating);

// console.log(averageRating);

// for (const book of books) {
// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);

// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const bookshelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBooks(bookName) {
//     this.books.push(bookName);
//   },
//   removeBooks(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookshelf.getBooks());
// bookshelf.addBooks("The Mist");
// bookshelf.addBooks("Dream Guardian");
// console.log(bookshelf.getBooks());
// bookshelf.removeBooks("The Mist");
// console.log(bookshelf.getBooks());

// const adTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {},
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const newBooks = this.books.map((book) => (book === oldName ? newName : book));
//     this.books = [...newBooks];
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
