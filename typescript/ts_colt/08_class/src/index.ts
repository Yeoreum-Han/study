class Player {
    // readonly first: string;
    // readonly last: string;

    //private은 실행 전에서만 유효
    // private score: number = 0;       

    // constructor(first: string, last: string) {
    //     this.first = first;
    //     this.last = last;
    // }

    constructor(
        public first: string,
        public last: string,
        protected _score: number    //protected 자식클래스에서만 접근가능
    ) { }

    private secretMethod(): void {
        console.log("its secretMethod");
    }

    get fullName(): string {         //setter 없으면 readonly로 취급
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("score cannot be negative");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999999;
    }
}

const elton = new Player("rose", "flower", 2);
// elton.secretMethod();
console.log(elton.fullName);
console.log(elton.score);
elton.score = 99;




interface Colorful {
    color: string;
}
interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) { }
}
const bike1 = new Bike("red");

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { }
    print(): void {
        console.log("printable method");
    }
}
const jacket1 = new Jacket("Prada", "black");
jacket1.print();




abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay():number;
    greet(){
        console.log("Hello");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first:string, last:string, private salary:number){
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(
        first:string, 
        last:string, 
        private hourlyRate: number, 
        private hoursWorked: number
    ){
        super(first,last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
