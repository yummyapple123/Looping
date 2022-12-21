//THE FOR LOOP
/*
console.log("lifting weights repitition 1 😀");
for (let i = 1; i <= 10; i++) {
  console.log(`printing from ${i}`);
}
*/

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
//jonas[5] does not exist

for (let i = 0; i < jonasArray.length; i++) {
  //reading from jonas array
  console.log(jonasArray[i], typeof jonasArray[i]);
  //filling types array
  //types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("---Only string"); //print only string from the array
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("---break with number---"); //code will break after the first numebr is found
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
//try to push again
