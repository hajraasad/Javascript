
//for in loop used to iterate over objects  /// for of is for arrays 
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
} 

console.log(text);

//for each used with an array 
const arr=["sara","ayesha","asad"];

arr.forEach(function(value,index){

console.log(index+ ":"+ value);
}

);

//while loop 
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let textt = "";

while (cars[i]) {
  text += cars[i];
  i++;
}
console.log(text);

//javascript array functions
//pop() returns the last element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

console.log(fruit);

//push() returns the new length in js 
const nfruits = ["Banana", "Orange", "Apple", "Mango"];
let length = nfruits.push("Kiwi");
console.log(length)
console.log(nfruits)

//The shift() method returns the value that was "shifted out"
const nnfruits = ["Banana", "Orange", "Apple", "Mango"];
let variable = nnfruits.shift();
console.log(nnfruits);

//unshift() method returns the len as well - adds in the beginning of array 
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let xyz=fruitss.unshift("Lemon");
console.log(fruitss);
console.log(xyz);

//concat in arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

//Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
let multiply=function(x){
return function(y)
{
console.log(x*y);
}
}

let mulbytwo=multiply(2);
mulbytwo(3);

//explicit coercion
let number = Number("35");

//Implicit Coercion
let e=12 + ""    //Output is "12" as number 12 is converted to string 
