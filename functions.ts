// Different ways to write Function
// function add(num1: number, num2: number) : number {
//     return num1 + num2;
// }

// console.log(add(10,2));

// Another way to write function
// const sub = (num1: number, num2: number ) : number => num1 - num2
// console.log(sub(10,2));

// Anoter way 
const mult = function (num1: number, num2: number): number {
    return num1 * num2
}

// Optional Parameters
// the num3 is an optional params will can be assigned a value or not
function add(num1: number, num2: number, num3? : number) : number {
    return num3? num1 + num2 + num3 : num1 + num2; // this condition will check if there is value assigned to num3 or not.
    // If there is a value num1, nm2 and num3 will be add, else num1, num2 will be added
}
console.log(add(10,2,5));
console.log(add(10,2));

// Required Parameters
const sub = (num1: number, num2: number, num3 = 10 ) : number => num1 - num2
// if num3 didn't have a vaule then 10 will be used as default but it there is a value assigned to num3 the current value will be used
// Example
console.log(sub(10,2));
console.log(sub(10,2,5));

// Rest Parameters
// In This will pass a No(#) of arrays to num3
function add2(num1: number, num2: number , ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b)=> a + b + 0);
}

let numbers = [1,2,3,4,5];
console.log(add2(2,3, ...numbers));

// Genertic function
// The "Type" => Represent a placeholder
function getItems<Type>(items:Type[]): Type[] {
    return new Array<Type>().concat(items);
}

// Using reuse this function on different dataType. Eg
let countResult = getItems<number>([1, 2, 3, 4, 5]);
let countString = getItems<string>(["a", "b", "c", "d", "e"]);