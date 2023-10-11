//map function will return all the values multiplied by 10 for each val in the array
// const numbers = [65, 44, 12, 4];
// const arr = numbers.map(myFunction)
//
// function myFunction(num) {
//     return num * 10;
// }

//filter returns all the values that are greater than 18 in this case
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// console.log(result);

//find index returns the first index that passes the test and if no val is found it returns -1 in that case
const ages = [3, 10, 18, 20];

console.log(ages.findIndex(checkAge));

function checkAge(age) {
    return age > 18;
}

//push add element to end and return new len
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

//unshift adds element at the beginnig of the array and gives new length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

//contains returns true or false if the dom element is descendant of it
const span = document.getElementById("mySPAN");
let answer = document.getElementById("myDIV").contains(span);

//includes returns true or false - below 3 means we start the search at index 3
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Banana", 3);

//reduce will iterate from the left of the array and perform the specified operation
const numbers = [175, 50, 25];
numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
} 
