"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employees_id;
Object.defineProperty(exports, "__esModule", { value: true });
//  call it
// let user: User = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10}; // Based on this object 
// Database Structing && Array Base Structing
// Using interface as DataType
// To access the User Object
// user.name;
// user.email;
// To write it in a single line of code
// let { name, email}: User = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id:10}; // This is know as Objects based structing
let { name: UserName, email } = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id: 10 }; // Can rename the property
console.log(UserName);
let jobs = { name: "Victor", email: "Onwuegbchulemvic02@gmail.com", id: 10, salery: 20000 };
class Employees {
    constructor(id, name, address) {
        _Employees_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employees_id, id, "f");
        this.name = name;
        this.address = address;
    }
}
_Employees_id = new WeakMap();
;
let victor = new Employees(1, "Victor", {
    street: "Pharse 7, Okoito St",
    city: "Ikorodu",
    state: "Lagos",
    code: 10110
});
// Array Destructing
let [user1, user2, ...restUsers] = [
    { name: "Victor", id: 1, email: "" },
    { name: "Victor1", id: 2, email: "" },
    { name: "Victor2", id: 3, email: "" },
    { name: "Victor3", id: 4, email: "" }
];
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
//# sourceMappingURL=interface.js.map