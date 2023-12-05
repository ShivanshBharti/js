const marvel_heros = [
  "Captain America",
  "Ironman",
  "Thor",
  "Hulk",
  "Spiderman",
  "Black Panther",
];

const dc_heros = ["Batman", "Superman", "Wonder Woman", "Aquaman", "Flash"];

// marvel_heros.push(dc_heros); //pushes the whole arr as an element
const total = marvel_heros.concat(dc_heros); //concatenates the two arrs
// console.log(total);
const total2 = [...marvel_heros, ...dc_heros]; //concatenates the two arrs
// console.log(total2);

// console.table(total.reverse()); //reverses the arr

// console.log(Array.from("Shivansh"));

const arr2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.table(arr2.flat()); //flattens the arr

console.log(Array.of(arr2, total));
