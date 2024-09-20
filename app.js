"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type annotation
//let variable:type=value;
var myMsg = "Hello world";
var isValid = true;
var counter;
counter = 0;
//type array
var arr = ["H", "e", "l", "l", "o"];
var Arr = [9, 4, 5, 6, 2];
var numberArr = [1, 6, 3];
arr.push("hi");
numberArr.push(5);
//mixed types values
var scores;
scores = ["Programming", 5, "Software Design", 4];
var numberStringArr = ["hi", "A", 2, 9]; //type : string / number
numberStringArr.push("one");
numberStringArr.push(-90);
//type object
var Person;
Person = {
    name: "test",
    age: 2,
};
//type function
var greetings;
greetings = function (name) {
    return name;
};
//Tiple
var tTuple;
tTuple = ["string", 9];
//tTuple = [0,"five"]; //order is important
//Example of RGB color that always comes in a three-number pattern:
var color = [255, 0, 8];
//RGBA tuple with the optional alpha channel value
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
//enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isSummer(month) {
    var bIsSummer = false;
    switch (month) {
        case Month.Mar:
        case Month.Apr:
        case Month.May:
            bIsSummer = true;
            break;
        default:
            bIsSummer = false;
            break;
    }
    return bIsSummer;
}
console.log(isSummer(Month.Dec));
console.log(isSummer(Month.May));
//union Types
var result;
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    //throw new Error("Parameters must be numbers or strings");
}
add("str", 5);
//function
function addNumbers(a, b) {
    if (a < 0 || b < 0) {
        return "not valid";
    }
    else {
        return a + b;
    }
}
var addition = addNumbers(-50, 6);
console.log("addition : " + addition);
addition = addNumbers(474852, 98784548);
console.log("addition : " + addition);
function multiply(a, b, c) {
    //return a*b*c;
    if (c != undefined) {
        return a * b * c;
    }
    return a * b;
}
/*
function testErr(a: number, c?: number, b: number): number { //option parameters must be define after requires parameters
  return a * b * c;
}*/
var mul = multiply(3, 2);
var ans = multiply(3, 2, 5);
console.log("mul : " + mul + " ans : " + ans);
function discount(price, discount) {
    if (discount === void 0) { discount = 0.25; }
    return price * (1 - discount);
}
var price = discount(4500);
console.log(price);
price = discount(4500, 0.75);
console.log(price);
//REST Parameters
//The rest parameter appear last in the parameter list.
//A function has only one rest parameter.
function calculate(operation) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    if (operation > 1 || operation < 0) {
        return "operation value can be 0 or 1 \n 0 - add , 1 - multiply";
    }
    var ans;
    if (operation == 0) {
        ans = 0;
        numbers.forEach(function (num) { return (ans += num); });
    }
    else if (operation == 1) {
        ans = 1;
        numbers.forEach(function (num) { return (ans *= num); });
    }
    return ans;
}
var operations = calculate(1, 5, 57, 78, 14, 46, 478, 1848);
console.log(operations);
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
var ansSum = sum(4, 78787, 4254);
console.log(ansSum);
ansSum = sum(3, 78787);
console.log(ansSum);
//class static properties and methods
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee._headCount++;
    }
    Employee.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.getHeadCount = function () {
        return Employee._headCount;
    };
    Employee._headCount = 0;
    return Employee;
}());
var employee = new Employee('fName', 'Lname');
console.log(Employee.getHeadCount());
var employee2 = new Employee('fName', 'Lname');
console.log(Employee.getHeadCount());
//different method to declare properties and initialize them in the constructor
var Student = /** @class */ (function () {
    function Student(firstName, lastName, _age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = _age;
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age <= 0 || age > 200) {
                throw new Error("Invalid Age");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        set: function (fullName) {
            var parts = fullName.split(' ');
            if (parts.length > 2) {
                throw new Error('Invalid Name');
            }
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student("vishwa", "Patel", 23);
console.log(student.age);
student.age = 24;
console.log(student.age);
//readonly property : immutable
var Product = /** @class */ (function () {
    function Product(expireDate) {
        this.expireDate = expireDate;
    }
    return Product;
}());
var product = new Product(new Date(2, 3, 2025));
