"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + "  " + this.lastName);
    };
    Customer.prototype.getAge = function () {
        console.log("Your Age is: " + this.age);
    };
    return Customer;
}());
exports.Customer = Customer;
// object = instance of class
var customer = new Customer("John", "Smith", 45);
customer.greeter();
customer.getAge();
