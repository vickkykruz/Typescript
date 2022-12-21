// let lname = 'John';

// lnane = 10; // This will return error because of the datatype
// To convert typescript to JS
// Run command `tsc`

// In typescript to decleare the datatype of a variable
let lname : string;

lname = "Chukwuemeka";

let newName = lname.toUpperCase();
console.log(newName);

// DataType Number
let age : number;
age = 25;
// age = "25"; // This is will display error because the value is a string
age = 25.5; // Accept decimal value

let named = "30";
let result = parseInt(named) // This fuction convert a string to number
console.log(result);

// DataType Boolean
// let isVaild : boolean; // This will return an error because it is not defined.
let isVaild : boolean = false;
console.log(isVaild);

// DataType Array
// => Define Array
// let emplist = [];
let emplist : string[]; // Saying all the items sould be string
emplist = ["John", "Victor", "Chukwuemeka"];

let numList : Array<number>;
numList = [1,2,3,4,5,6];

// numList = numList.filter((num)=> num > 2);
let results = numList.find((num)=> num === 2);
console.log(results);

// Used Of Radio Function
let sum = numList.reduce((acc, num)=> acc + num);
console.log(sum);

// DataType Enum
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color.Blue;

// DataType Turle
let swapNumber : [number, number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num1, num2];
}

swapNumber = swapNumbers(10, 20);
swapNumber[0] = 100;
// swapNumber[4]

let department;
department = "SS2 Blue";
department =10;