"use strict";
function logger() {
  console.log("My name is jonas");
}

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log();

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//   return juice;
// }

// fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //keep your code dry dont repeat yourselves

// //Function declarations and expressions
// //generic function
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// // const age1 = calcAge1(1991);
// // calcAge1(1997);
// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // functions are like vale but is not type and we can store than in a variable

// // const age2 = calcAge2(1991);

// // console.log(age1, age2);

// //Arrow function is a shorter form but faster to write
// // are excellent for function of one line
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge1(1991);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Vinicius"));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);

// //   const juice = `Juice with ${applePieces} piece of apples ${orangePieces}and pieces of oranges`;
// // }

// // fruitProcessor(2, 3);

// // ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
// */

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(85, 23, 71);

// function checkWinner() {
//   if (avgDolhins > avgKoalas * 2) {
//     console.log(`Dolphins wins(${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas wins(${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No teams wins");
//   }
// }

// //Introduction of Array
// //como um grande conteiner na qual pode lançar variaveis e são armazenados nessas estrutura de dados
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = [friend1, friend2, friend3];
// console.log(friends);
// //A function that call with parentheses
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends.length[friends.length - 1]);

// // const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
// // console.log(jonas.length);

// // const yearsAge = [1990, 1967, 2002, 2010, 2018];
// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);

// //Basic Operators Methods

// // method push -> add an element in the final of n array

// const friendsS = ["Michael", "Steven", "Peter"];
// friendsS.push("Jay");

// const jonas = {
//   name: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//   },
//   getSumary: function () {
//     return `${jonas.name} is a ${this.calcAge()}-year old ${
//       jonas.job
//     } and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
//   },
//   //to call a function inside a object
// };

// console.log(jonas.getSumary());

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// const person1 = {
//   fullName: "Marks Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// const person2 = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (person1.calcBMI() > person2.calcBMI()) {
//   console.log(
//     `${person1.fullName} BMI (${person1.calcBMI()} is higher than ${
//       person2.fullName
//     } (${calcBMI()}))`
//   );
// } else {
//   console.log(
//     `${person2.fullName} BMI (${person2.calcBMI()} is higher than ${
//       person1.fullName
//     } (${calcBMI()}))`
//   );
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights reptition ${rep}`);
// }

// const jonasArray = [
//   "jonas",
//   "Farias",
//   "teacher",
//   "22 years",
//   ["Michael", "Peter", "Steven"],
// ];
// //Filling types array

// //Reading for jonas array
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[0]);

//   types.push(typeof jonas[i]);
// }

// const yearsTest = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   ages.push(2037 - years[i]);
// }
// // Looping backwards and loops in loops
// // for (let i = jonas.length; i >= 0; i--) {
// //   console.log(i, jonas[i]);
// // }

// for (let rep = 1; rep < 6; rep++) {
//   console.log(`Exercise ${exercise}: Lifting weight reptition ${rep}`);
// }

// while (rep <= 10) {
//   console.log(` Lifting weights repetion ${rep}🏋️‍♂️´`);
//   rep++;
// }

// while (dice !== 6) {
//   let = Math.trunc(Math.random() * 6);
//   console.log(dice);
//   console.log(`You rolled a ${dice}`);
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let i;

function calcTip(i, k) {
  let total = bills[i] + tips[k];
  return totabill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0, 2;
}
for (let i = 0; i < bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip * bills[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr;
  }
  return sum / arr.length;
};

//Introduction of Array
//como um grande conteiner na qual pode lançar variaveis e são armazenados nessas estrutura de dados
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = [friend1, friend2, friend3];
console.log(friends);
//A function that call with parentheses
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length[friends.length - 1]);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas.length);

const yearsAge = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

//Basic Operators Methods

console.log(calcAverage([2, 3, 7]));

const array1 = ['a','b','c']
const array2 = ['d','e','f']

const temps = t1.concat(t2)
console.log(temps)
function calcTempAplitudeNew(){
 const temps= t1.concat(t2)
 console.log(temps);
}
const amplitudeNew=  calcTempAplitudeNew([3,5,1],[9,0,5])
console.log(amplitudeNew);