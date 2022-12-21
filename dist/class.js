"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// Another way to import <Not Recommaned>
// import * as UserLogin from './interface';
// How to create class
// class Employee {
// }
//To add a Property or constructors
class Employee {
    // Static Member => Can be access with the class name
    static getEmployeeCount() {
        return 50;
    }
    // Another method called Getter and Setter => how this work
    get emId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set emId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // To create a constructor and assigned this properties
    constructor(id, name, address) {
        // class Employee implements UserLogin.Login{
        // To define Properties
        _Employee_id.set(this, void 0); //This #id is another to declear a private. Using this `id` can't be accsssed
        __classPrivateFieldSet(this, _Employee_id, id, "f"); // Assing the defeine property inside the constructor's passed param
        this.name = name;
        this.address = address;
    }
    login() {
        // login(): UserLogin.User {
        return { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id: 10 };
    }
    // To create Class Methods
    getNameWithAddress() {
        // return "Name: " + this.name + ", " + "Address: " + this.address;
        return `Name: ${this.name}  Address: ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// Creating a Managing Class that Extend Employee Class
class Managing extends Employee {
    constructor(id, name, address) {
        super(id, name, address); // This is used to extend 
    }
    // To create Class Methods
    getNameWithAddress() {
        // return "Name: " + this.name + ", " + "Address: " + this.address;
        return `${this.name}  is manager at ${this.address}`;
    }
}
let Victor = new Employee(1, "Victor", "Phase 7, Okoito St, Gberigbe Rd, Ikorodu, Lagos State, Nigeria");
// Call the method
let address = Victor.getNameWithAddress();
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
//# sourceMappingURL=class.js.map