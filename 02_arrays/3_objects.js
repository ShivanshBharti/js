//singleton using object constructor
// Object.create

// Object literal
const mySym = Symbol("mySym");

const user = {
  name: "John",
  age: 30,
  location: "London",
  email: "johndoe@xyz.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
  [mySym]: "my-symbol",
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[mySym]);

user.name = "Jane";

//obj.freeze - prevents any changes to the object

user.greeting = function () {
  console.log(`Hello ${this.name}`);
};

console.log(user.greeting());
