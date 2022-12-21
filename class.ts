import { Login, User } from "./interface"; // Use to get class/ interface or liberies inside page
// Another way to import <Not Recommaned>
// import * as UserLogin from './interface';
// How to create class
// class Employee {

// }

//To add a Property or constructors
class Employee implements Login{
// class Employee implements UserLogin.Login{

    // To define Properties
    #id: number; //This #id is another to declear a private. Using this `id` can't be accsssed
    // id: number;
    protected name: string; // the properted keyword is useful to extended another class. Eg below 
    address: string; // Doing dis we are defining the property

    // Static Member => Can be access with the class name
    static getEmployeeCount(): number {
        return 50;
    }

    // Another method called Getter and Setter => how this work
    get emId(): number { // This get the parms
        return this.#id;
    }

    set emId(id: number){ // This set the value
        this.#id = id;
    }

    // To create a constructor and assigned this properties
    constructor(id: number, name: string, address:string){ // Using The construction menthod we pass the define property
        this.#id = id; // Assing the defeine property inside the constructor's passed param
        this.name = name;
        this.address = address;
    } 
    login(): User {
    // login(): UserLogin.User {

        return { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10};
    }


    // To create Class Methods
    getNameWithAddress(): string {
        // return "Name: " + this.name + ", " + "Address: " + this.address;
        return `Name: ${this.name}  Address: ${this.address}`; 
    }
}

// Creating a Managing Class that Extend Employee Class
class Managing extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address); // This is used to extend 
    }

    // To create Class Methods
    getNameWithAddress(): string {
        // return "Name: " + this.name + ", " + "Address: " + this.address;
        return `${this.name}  is manager at ${this.address}`; 
    }
}

let Victor = new Employee(1, "Victor", "Phase 7, Okoito St, Gberigbe Rd, Ikorodu, Lagos State, Nigeria");
// Call the method
let address = Victor.getNameWithAddress()

// Call the value from get and set
Victor.emId = 100;
console.log(Victor.emId);

// To call a static method inside a class
// let employeeCount = Employee.getEmployeeCount();

let Mike = new Managing(2, "Mike", "Phase 7, Okoito St, Gberigbe Rd, Ikorodu, Lagos State, Nigeria");

// Let give a value to this properties above
// Note: This is allowed when define the property of the class only
// let Victor = new Employee();

// Assiging Value
// Victor.id = 1;
// Victor.name = "Onwuegbuchulem Victor Chukwuemeka";
// Victor.address = "Phase7, Okoito Street, Gberigbe Rd, Ikorodu, Lagos State, Nigeria";

// console.log(Victor);
// console.log(address);
console.log(Mike.getNameWithAddress());