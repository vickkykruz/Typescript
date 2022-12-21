// To Create an Interface
export interface User {
    name: string,
    // age: number,
    age?: number, // Can also make an optional property by put a `?` behind it
    email: string
    id: number
}
//  call it
// let user: User = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10}; // Based on this object 
// Database Structing && Array Base Structing
// Using interface as DataType

// To access the User Object
// user.name;
// user.email;

// To write it in a single line of code
// let { name, email}: User = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10}; // This is know as Objects based structing
let { name: UserName, email}: User = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10}; // Can rename the property
console.log(UserName);

// Assume we extuend User to Employment Interface
interface Employment extends User{
    salery: number
}

let jobs : Employment = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10, salery: 20000};


// Note: Most of the time will be using interface to create user defined dataType E.g
interface Address {
    street:string,
    city: string,
    state: string,
    code: number
}

class Employees {
    #id: number;
    name :string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address
    }
};

let victor = new Employees(1, "Victor", {
    street: "Pharse 7, Okoito St", 
    city: "Ikorodu", 
    state: "Lagos", 
    code: 10110
})
// console.log(victor);

// Use to export and import to referr a interface/class to another page
export interface Login { // Using this export keyword means this particular interface can be use outside the class
    login(): User;
}

// Array Destructing
let [user1, user2, ...restUsers]: User[] = [
    {name: "Victor", id: 1, email: ""},
    {name: "Victor1", id: 2, email: ""},
    {name: "Victor2", id: 3, email: ""},
    {name: "Victor3", id: 4, email: ""}
]

// let result = restUsers.filter(user => user.id > 3);
// console.log(user1);
// console.log(...restUsers);

// =============================================
// Decorators
// ============================================

// @Component({}) // This are decorators => It changes the behavour of a class by runtime
// class Component {
//     constructor(name: string) {
    
//     }
// }