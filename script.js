// // Function Calling Other Function
// const calculateAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const jobLeft = function (birthYear) {
//   const age = calculateAge(birthYear);
//   return 65 - age;
// };

// // const aAge = calculateAge(1975);
// // console.log(aAge);

// const ajobLeft = jobLeft(1975);
// console.log(ajobLeft);

// // JavaScript Events
// function displayText() {
//   console.log("This is console");
// }

// function alertText() {
//   alert("This is Alert Text");
// }

// // JavaScript String
// const firstName = "Asif";
// const lastName = "Akbar";
// console.log(firstName);
// console.log(lastName);

// // Example
// const text = 'I love "Bangladesh!"';
// console.log(text);

// // Example 2
// const text2 = " I love 'Bangladesh!'";
// console.log(text2);

// // Example 3
// const text3 = ' I love "Bangladesh!"';
// console.log(text3);

// // Example 4
// const text4 = "I love \\Bangladesh!";
// console.log(text4);

// // string methods
// const text = "Biswajit Adhikary";
// console.log(text.length);

// String Slice
// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// // Negative slice
// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.slice(-5);
// console.log(fruit1);

// const fruit2 = fruits.slice(-13, -7);
// console.log(fruit2);

// const fruit3 = fruits.slice(-20, -15);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// //substring
// const fruits = "Apple, Banana, Mango";

// const fruit1 = fruits.substring(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.substring(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.substring(15, 20);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// // Substr
// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.substr(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.substr(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.substr(15, 20);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// // substr
// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.substr(-5);
// console.log(fruit1);

// const fruit2 = fruits.substr(-13, -7);
// console.log(fruit2);

// const fruit3 = fruits.substr(-20, -15);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

//string replace
// const text = "I love khulna!";
// console.log(text);

// const text2 = text.replace("khulna", "Dhaka");
// console.log(text2);

// // String toUpperCase
// const text = "Hello World";
// console.log(text);
// console.log(text.toUpperCase());

// // String toLowerCase
// const text = "Hello World";
// console.log(text);
// console.log(text.toLowerCase());

// // String trim
// const text = "    Hello World!    ";
// console.log(text);
// console.log(text.trim());

// // string trimStart
// const text = "     Hello World!     ";
// console.log(text);
// console.log(text.trimStart());

// // String trimEnd
// const text = "     Hello World!     ";
// console.log(text);

// string search
const text = "Rahim Karim Sakib Karim ";
console.log(text.indexOf("Karim"));

console.log(text.lastIndexOf("Karim"));

console.log(text.search("Karim"));
