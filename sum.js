//use of var
var a=5;
var b =6;
var sum;
sum=a+b;
console.log(sum);

//use of a function in javascript 
function subtraction(a,b)
{
console.log( b-a)
	
}


subtraction(4,8);

//use of an object and this keyword refers to the object
const object={
name: "hajra",
university: "fast", 
details: function()
{

console.log(this.name);
console.log(this);


}

}

object.details();

//hoisting concept - we can access functions and variables even in the start if they are declared later on 
console.log(x)
console.log(hoist)

var x=2;
function hoist()
{
	console.log("i am hoist func");
} 


//scopes var and let variables
var a=20;
{
var a=10;//new variable with the same name - var a 
}
console.log(a);


let z=20; 
function xyz(){
z=10;
console.log(z);
}
console.log(z);
xyz();





























































