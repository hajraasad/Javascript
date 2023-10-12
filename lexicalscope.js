function sayHello() {
    let name = "John"; // Local variable

    console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"

//console.log(name);
// Output: Uncaught ReferenceError: name is not defined


//code below gives error as well because message is not defined  globally
function sayHello() {
    let name = "John"; // Function variable

    if (true) {
        let message = "Hello"; // Block variable
        console.log(message + " " + name);
        // Output: "Hello John"
    }

    console.log(message);
    // Output: Uncaught ReferenceError:
    // message is not defined
}

sayHello();

//closures are func itself and its lexical scope
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();//returns the display name function because it remembers that

//timeout will execute last since it is async task even if the time is 0 
console.log("num1");
setTimeout(() => 
{
 // Do even more stuff
  console.log("num2")
}, 0);
console.log("num2");


            
