//type annotation
//let variable:type=value;
let myMsg: string = "Hello world";
let isValid: boolean = true;
let counter: number;
counter = 0;

//type array
let arr: String[] = ["H", "e", "l", "l", "o"];
let Arr: number[] = [9, 4, 5, 6, 2];
let numberArr = [1, 6, 3];
arr.push("hi");
numberArr.push(5);

//mixed types values
let scores: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];

let numberStringArr = ["hi", "A", 2, 9]; //type : string / number
numberStringArr.push("one");
numberStringArr.push(-90);

//type object
let Person: {
  name: string;
  age: number;
};
Person = {
  name: "test",
  age: 2,
};

//type function
let greetings: (name: string) => string;
greetings = function (name: string) {
  return name;
};

//Tiple
let tTuple: [string, number];
tTuple = ["string", 9];
//tTuple = [0,"five"]; //order is important

//Example of RGB color that always comes in a three-number pattern:
let color: [number, number, number] = [255, 0, 8];

//RGBA tuple with the optional alpha channel value
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

//enum
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isSummer(month: Month) {
  let bIsSummer = false;
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
let result: number | string;

function add(a: number | string, b: number | string) {
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
function addNumbers(a: number, b: number): number | string {
  if (a < 0 || b < 0) {
    return "not valid";
  } else {
    return a + b;
  }
}

let addition = addNumbers(-50, 6);
console.log("addition : " + addition);
addition = addNumbers(474852, 98784548);
console.log("addition : " + addition);
function multiply(a: number, b: number, c?: number): number {
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

let mul = multiply(3, 2);
let ans = multiply(3, 2, 5);
console.log("mul : " + mul + " ans : " + ans);

function discount(price: number, discount: number = 0.25): number {
  return price * (1 - discount);
}
let price = discount(4500);
console.log(price);
price = discount(4500, 0.75);
console.log(price);

//REST Parameters
//The rest parameter appear last in the parameter list.
//A function has only one rest parameter.
function calculate(operation: number, ...numbers: number[]): number | string {
  if (operation > 1 || operation < 0) {
    return "operation value can be 0 or 1 \n 0 - add , 1 - multiply";
  }
  let ans;
  if (operation == 0) {
    ans = 0;
    numbers.forEach((num) => (ans += num));
  } else if (operation == 1) {
    ans = 1;
    numbers.forEach((num) => (ans *= num));
  }
  return ans;
}

let operations = calculate(1, 5, 57, 78, 14, 46, 478, 1848);
console.log(operations);

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

let ansSum = sum(4, 78787, 4254);
console.log(ansSum);
ansSum = sum(3, 78787);
console.log(ansSum);

//class static properties and methods
class Employee {
  private static _headCount:number = 0;
  private firstName: string;
  private lastName: string;

  constructor( firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    Employee._headCount++;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  public static getHeadCount(){
    return Employee._headCount;
  }
}

let employee = new Employee('fName','Lname');
console.log(Employee.getHeadCount());
let employee2 = new Employee('fName','Lname');
console.log(Employee.getHeadCount());
//different method to declare properties and initialize them in the constructor
class Student {
  constructor(
    private firstName: string,
    private lastName: string,
    private _age: number
  ) {}

  public get age() {
    return this._age;
  }

  public set age(age: number) {
    if (age <= 0 || age > 200) {
      throw new Error("Invalid Age");
    }
    this._age = age;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName:string){
    let parts = fullName.split(' ');
    if(parts.length > 2){
      throw new Error('Invalid Name');
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

}

let student = new Student("vishwa", "Patel", 23);
console.log(student.age);
student.age = 24;
console.log(student.age);
//readonly property : immutable

class Product {
  constructor(readonly expireDate: Date) {}
}
let product = new Product(new Date(2, 3, 2025));
//product.expireDate = new Date(2025,6,10)


export {};
