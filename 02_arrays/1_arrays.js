const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Heros = ["Batman", "Superman", "Spiderman", "Ironman", "Thor"];
// 2. Array Methods

Heros.push("Hulk"); //pushing the element into the arr

Heros.pop(); //removing the last element from the arr

Heros.unshift("Hulk"); //adding the element at the beginning of the arr

Heros.shift(); //removing the first element from the arr

// console.log(Heros.includes("Thor"));
// console.log(Heros.indexOf("Thor"));

// const newHeros = Heros.join(); //converting the arr into string

//slice and splice
console.log("B", Heros);
//slice doesnt modify the original arr
const newHeros = Heros.slice(1, 3); //slicing the arr
console.log(newHeros);
//splice includes the range and also modifies the original arr
const newHeros1 = Heros.splice(1, 3, "Hulk", "Captain America"); //splicing the arr
console.log(Heros);
console.log(newHeros1);
