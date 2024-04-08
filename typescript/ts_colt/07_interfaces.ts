// interface    객체의 형태를 묘사할 때 사용. 오로지 객체만.
interface Point {
    x:number;
    y:number;
}
const pt: Point = {x:123, y:342};

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi() : string;    // 메서드  
    // sayHi: () => string; 이렇게 써도 됨
}
const thomas : Person = {
    first: "Thomas",
    last: "Hardy",
    id: 23234,
    sayHi: () => {          //메서드 사용
        return "Hello!";
    }
};


interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}
const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount : number){
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));



// type과 다르게 interface는 같은 인터페이스 이름으로 열어 프로퍼티를 추가할 수 있다.
interface Dog {
    name: string;
    age: number;
}

interface Dog{
    breed: string;
    bark() : string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "Woof"
    },
}



//인터페이스 상속/확장
interface ServiceDog extends Dog {
    job : "drug sniffer" | "bomb" | "guide dog";
}
const chewy: ServiceDog = {
    name : "chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "bark"
    },
    job : "guide dog"
}



// 다중상속
interface Human{
    name:string;
}
interface Employee{
    readonly id: number;
    email: string;
}
interface Engineer extends Human,Employee{
    level: string;
    languages: string[];
}
const pierre : Engineer = {
    name: "Pierre",
    id: 3234,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
}



// 타입별칭 vs 인터페이스
/* 1. 인터페이스는 객체만
    2. 인터페이스는 다시 열어 프로퍼티추가 가능
    3. 확장 시 & / extends
 */

