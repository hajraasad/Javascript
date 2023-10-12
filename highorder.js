//example of high order is set time out since it takes the func as parameter
function salary() {
    console.log("hello i am a high order function");

}
setTimeout(salary,2000);

//map is also an example of high order function
// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
    return { key: index, value: val * val };
})

// Display output
console.log(newArr)

//highorder
function operate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const result1 = operate(3, 4, add);
const result2 = operate(3, 4, subtract);

console.log(result1); // 7
console.log(result2); // -1
