class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@gmail.com", posts: [] });
console.log(editor);
console.log(editor.email);
editor.addPost("post-1");
console.log(editor.posts);

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@gmail.com", posts: [] });
// console.log(editor);
// console.log(editor.email);

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Something
// }

// const editor = new ContentEditor("mango@gmail.com");
// console.log(editor);
// console.log(editor.email);

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@gmail.com" });

// console.log(User.isEmailTaken("poly@gmail.com"));
// console.log(User.isEmailTaken("mango@gmail.com"));

// class User {
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@gmail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles);
// console.log(User.Roles);

// console.log(mango.role);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@gmail.com" });

// console.log(mango.email);
// mango.email = "mango@supergmail.com";
// console.log(mango.email);

// set email(newEmail){
//   if (newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@gmail.com",
// });

// mango.changeEmail("mango@supergmail.com");
// console.log(mango.getEmail());
// console.log(mango.#email);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@gmail.com",
// });
// console.log(mango);

// const poly = new User({
//   name: "Полі",
//   email: "poly@gmail.com",
// });
// console.log(poly);

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@gmail.com");
// console.log(mango);

// const poly = new User("Полі", "poly@gmail.com");
// console.log(poly);

// class User {}

// const mango = new User();
// console.log(mango);

// const poly = new User();
// console.log(poly);

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys);
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.name);

// console.log(dog.hasOwnProperty("legs"));
// console.log(dog.legs);

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}`);
// }

// makeMessage(customer.getFullName.bind(customer));

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в "${this.service}".`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго");

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі");

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };

// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо");
// greetGuest.call(poly, "З прибуттям");

// greetGuest.apply(mango, ["Ласкаво просимо"]);
// greetGuest.apply(poly, ["З прибуттям"]);

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

// const showThis = () => {
//   console.log("this is showThis: ", this);
// };

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName);

// function showThis() {
//   console.log("This in showThis", this);
// }

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); //{username: "Petya", showThis: f, showName: f}

// petya.showName(); //'Petya'

// function foo() {
//   console.log(this);
// }

// foo();

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors());

// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors());

// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();
