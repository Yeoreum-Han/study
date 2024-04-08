let age: number | string = 21;
age = 23;
age = "24";



type Point = {
    x: number,
    y: number
};
type Loc = {
    lat: number,
    long: number
};
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 223.123, long: 23.34234 }



function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("123");

// 타입 좁히기 narrowing        조건문과 typeof로
function calculateTax(price: number | string, tax: number) {
    // return price * tax;      price의 타입 때문에 에러 발생
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}



//배열
var stuff: (number | string)[] = [1, 2, 3, "sdfs"];
const coords: (Point | Loc)[] = [];
coords.push({ x: 1, y: 34 });
coords.push({ lat: 223.123, long: 23.34234 });



//리터럴 타입
let zero: 0 = 0;         //zero의 타입은 0이며 리터럴 값인 0만을 갖는다
// zero = 2    Type '2' is not assignable to type '0'
let hi: "hi" = "hi";

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "angry"

type DayOfWeek = 
    | "Monday" 
    | "Tuesday" 
    | "Wednesday" 
    | "Thursday" 
    | "Friday" 
    | "Saturday" 
    | "Sunday";
let today: DayOfWeek = "Monday";
today = "Friday";
// today = "asdf";