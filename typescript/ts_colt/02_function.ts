function square(num: number) {
    return num * num;
}
square(3)
// square("asd")

function greet(person: string) {
    return `Hi there, ${person}!`;
}
const doSomething = (person: string, age: number, isFunny: boolean) => { };
doSomething("ChickenFace", 56, true);



// 파라미터에 기본값 지정하기       변수 : 타입 = "기본값"
function greeting(person: string = "stranger") {
    return `Hi there, ${person}!`;
}
greeting();
greeting("Amy");



// return값의 타입지정      기본적으로 추론이 가능함
function square2(num: number) {
    num * num;
    //function square2(num: number): void  리턴값이 없다고 뜸
}
square2(3);

function square3(num: number): number {
    //리턴 타입은 지정했는데 return 코드가 없으므로 오류
    num * num;
}

function rando(num: number) {
    //조건에 따라 리턴값의 타입이 달라지는 경우도 추론이 가능
    //function rando(num: number): string | number
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number{
    return x + y;
}



// 익명함수 contextual 타입지정
const colors = ["red", "orange", "yellow"];
colors.map(color => {       //(parameter) color: string
    return color.toUpperCase();
    /* 
    return color.toFixed();
    문맥상 string타입으로 추론하기 때문에 스트링타입에서 쓸 수 없는 메서드를 사용하려 하면 에러가 뜸
    */
});



// void타입  리턴값이 없는 함수의 타입 - 실제로는 undefined이나 null을 리턴하지만 이 값을 사용할 일은 없음
function printTwice(msg: string): void {
    //function printTwice(msg: string): void    
    //안적어도 추론하지만 확실함을 위해 명시
    console.log(msg);
    console.log(msg);
}



// never타입    ts의 타입, void와 달리 아무것도 리턴할 수 없음.
// 에러 던지거나 무한루프에서 사용
function makeError(msg: string): never {
    throw new Error(msg);
}
function gameLoop(): never{
    while(true){
        console.log("Game Loop Running!");
    }
}
