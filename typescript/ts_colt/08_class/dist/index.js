"use strict";
class Player {
    // readonly first: string;
    // readonly last: string;
    //private은 실행 전에서만 유효
    // private score: number = 0;       
    // constructor(first: string, last: string) {
    //     this.first = first;
    //     this.last = last;
    // }
    constructor(first, last, _score //protected 자식클래스에서만 접근가능
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("its secretMethod");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
const elton = new Player("rose", "flower", 2);
// elton.secretMethod();
console.log(elton.fullName);
console.log(elton.score);
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike("red");
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log("printable method");
    }
}
const jacket1 = new Jacket("Prada", "black");
jacket1.print();
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
