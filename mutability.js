// //primitive datatypes are immutable
// let name = "Maya";
// let newName = name;
// newName="hajra";
// console.log(name);
// console.log(newName);
//
// //nonprimitive data types are mutable e.g objects
//
// let obj1={
//     name:"hajra",
//     age:19
// };
//
// let obj2=obj1;
// obj2.name="asma";
// console.log(obj1);
//
// //in order to do the deep copy we use the spread operator
// //we see that spread operator can be used to make a deep copy
// let obj3={...obj1};
// obj3.name="ali";
// console.log(obj1);
// console.log(obj3);
//
// //examples of spread operator uses other than the above
//

//copy elements
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2);

//spread operator use with an object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}


//When the spread operator is used as a parameter, it is known as the rest parameter
function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8

