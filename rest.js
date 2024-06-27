// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   location: {
//     ip: 514151515,
//     address: "street",
//   },
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice);

// const bookRating = book.rating;
// console.log(bookRating);

// const locations = book.location;
// console.log(location);

// const locationIp = book.location.ip;
// console.log(locationIp);

// book.rating = 8.88;

// console.log(book.rating);

// book.language = "english";

// console.log(book.language);

// const propName = "name";
// const propSurname = "surname";
// const age = 19;

// const biografy = {
//   age,
//   [propSurname]: "Smolinskyi",
// };

// biografy[propName] = "Maks";

// console.log(biografy.name);
// console.log(biografy.age);
// console.log(biografy.surname);

// const bookShelf = {
//   books: ["Times New Roman", "Courier New"],

//   getBooks() {
//     console.log(this);
//   },

//   addBooks(bookName) {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBooks("Ariel");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// const values = Object.values(book);

// for (const values of keys) {
//   // Ключ
//   console.log(values);
//   // Значення властивості з таким ключем
//   console.log(book[values]);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

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

// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(3);
// console.log(averageRating);

const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps));

// console.log(...temps);
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// temps.push(15);
// console.log(temps);

// console.log(copyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(lastWeekTemps);
// console.log(currentWeekTemps);
// console.log(allTemps);

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

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

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(likes); // 1308

// const rgb = [200, 100, 255];
// const [red, ...colors] = rgb;

// console.log(`R:${red} other colors:${colors}`);
