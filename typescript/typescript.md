## 타입스크립트

#### 장점
js는 런타임시 타입이 결정되고 그 때 오류 (동적 타입언어|다이나믹 타이핑) 
ts는 컴파일시 타입이 결정되고 그 때 오류 (정적 타입언어) 빠른 수정 가능.
그리고 ts는 에러 내용을 js보다 구체적으로 알려줌.

#### 기본타입
let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [2,3,4];
let a2:Array<number> = [1,2,3];
let n:null = null;
let u:undefined = undefined;

**튜플(Tuple) : 배열요소마다 다른 타입일 때
let b:[string, number];
b = ['a', 2];

**void : 함수에서 아무것도 반환하지 않을 때
function sayHello():void{
    console.log('hello');
}

**never : 에러를 반환하거나 무한루프인 함수 일 때
function showError(){
    throw new Error();
}
function infLoop(){
    while(true){
        //...
    }
}

**enum : 비슷한 것끼리 묶을 때
enum Os { Window = 'win', Ios = 'ios', Android = 'and' }
let myOs:Os;    //myOs는 Os타입으로 지정되고 Os요소중의 값만 가질 수 있다.
myOs = Os.Window

#### 인터페이스

--객체의 타입을 지정하고 정의할 때    ?/readonly
type Score = 'A' | 'B' | 'C' | 'F';  //Score라는 타입은 이 값들만 가질 수 있다고 정의

interface User{
    name : string,
    age : number,
    gender? : string,     // optional(=?)로 표현해서 gender값이 없어도 에러가 나지 않게.
    readonly birthYear : number,     // readonly 값은 변경할 수 없음
    [grade : number] : Score   //넘버타입인 값의 배열키는 스코어타입의 값을 가짐
}
let user : User = {
    name : 'a',
    age : 30,
    birthYear : 2024,
    1 : 'A',
    2 : 'B'
    }
user.age = 10;
user.gender = 'male';
console.log(user.age);


--함수의 타입을 지정하고 정의할 때
interface IsAdult {
    (a:number) : boolean;
}

const result : IsAdult = (age) =>{
    return age > 19;
}

console.log(result(3));


--클래스의 타입을 지정하고 정의할 때
interface Car {
    color : string,
    wheels : number,
    start(): void,
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c;
    }
    start(){
        console.log('go...');
    }
}
const b = new Bmw('green');
console.log(b);
b.start();

//확장도 가능
interface Benz extends Car {
    door : number;
    stop(): void;
}


#### 함수

--매개변수에 optional
function hello(name?:string){
    return `Hello, ${name || "world"}`;
}
const result = hello();     
//매개변수가 없을 때의 코드도 작성했지만 에러표시가 나므로 매개변수에 optional추가

--매개변수가 전개연산자면 타입은 배열
function add(...nums:number[]){
    return nums.reduce((result, num)=>result+num,0);
}
add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

--this의 타입도 매개변수에서 정해주기
interface User{
    name : string
}
const Sam : User = {name : 'Sam'};
function showName(this: User){
    console.log(this.name);
}
const a = showName.bind(Sam);
a();    //결과는 "Sam"


--함수 오버로드
interface User{
    name : string,
    age: number
}
function join(name:string, age:number) : User;   //함수 오버로드
function join(name:string, age:string) : string; //함수 오버로드
function join(name:string, age:number|string) : User | string{
    if(typeof age === "number"){
        return{
            name,
            age,
        };
    } else {
        return '나이는 숫자로 입력해주세요';
    }
}   
const sam : User = join("Sam",30);          //join함수에서 리턴값을 정해주고 조건문 처리도 했지만 
const jane : string = join("Jane", "30");   //User타입일지 string타입일지 명확하지 않다고 하므로 함수 오버로드


#### 리터럴타입

const userName1 = "Bob";    //const는 재할당 불가하므로 타입이 아예 "Bob"가 됨. = 문자열 리터럴타입
let userName2 : string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher" ; // 이 역시 값을 3가지 문자열 리터럴 타입으로 제한하고 있음 


#### 유니온/교차 타입

-- | => 유니온 타입
식별가능한 유니온 : 동일한 속성(name)에 타입("car"/"mobile")을 다르게 하는 것 
interface Car{
    name: "car";
    color: string;
    start():void;
}
interface Mobile{
    name: "mobile";
    color: string;
    call():void;
}
function getGift(gift:Car | Mobile){
    console.log(gift.color);
    if(gift.name === "car") gift.start();   //두가지 인터페이스 모두에 name이 있고, 인터페이스의 값이므로 "car"와 "mobile"은 각각 타입이 됨. 즉 name이 "car"타입이면 ~ 아니면 ~ 
    else gift.call();
}

-- & => 교차타입
각 인터페이스의 속성을 모두 적어야 한다.
interface Car{
    name: string;
    start():void;
}
interface Toy{
    name: string;
    color: string;
    price: number;
}
const toyCar : Toy & Car = {
    name : "타요",
    start() {},
    color : 'yellow',
    price : 1000,
}


#### 클래스
es6 -> 클래스는 생성자함수로 객체를 만들고, 클래스의 메서드는 프로토타입에 들어간다. new 없이는 객체가 생성되지 않는다. 상속받은 클래스에서는 반드시 super()로 생성자를 상속받아야 한다.
프로토 타입은 몰까^^

class Car {
    color:string;   //이걸 선언하지 않을 거면
    constructor(color:string){      //constructor(public color:string) 또는 (readonly color:string)
        this.color = color;
    }
    start() {
        console.log('start');
    }
}
const bmw = new Car('red');

--접근제한자 es6에서는 없던것
public private protected
-
public - 자식클래스, 클래스인스턴스 모두 접근 가능
-
private - 해당 클래스 내부에서만 접근 가능
부모에서 private을 걸면 자식 클래스에서 사용할 수 없음. private 또는 #
-
protected - 자식클래스에서 접근 가능
protected는 자식클래스 내부에서는 사용가능, 인스턴스에서는 사용할 수 없음.
console.log(c1.name) -> 안 됨 

readonly를 붙인 변수를 변경하고 싶다면 생성자에 해당 변수를 매개변수로 추가해서 수정 가능.

static - 정적변수로 만들 수 있음. 클래스명.변수 로 호출해야함

--추상클래스
absctract class Car {...}
new 로 인스턴스 생성 불가, 상속받아서만 사용할 수 있다. 추상클래스는 이름만 선언하는 것이고 구체적인 내용은 상속받은 클래스에서 작성해야한다.


#### 제네릭 Generic
타입 파라미터를 사용해(<T>) 클래스, 함수, 인터페이스를 다양한 타입으로 재사용할 수 있다. 생성하는 시점에 타입을 결정.
function getSize<T>(arr:T[]) :number { 
    return arr.length;
}
const arr1 = [1,2,3];
getSize<number>(arr1);
const arr2 = ['a','b','c'];
getSize<string>(arr2);



#### 유틸리티 타입
--keyof
인터페이스의 키값들을 유니언 형태로 받을 수 있음.
interface User{
    id: number;
    name:string;
    age:number;
    gender:'m'|'f';
}
type UserKey = keyof User;      //'id' | 'name' | 'age' | 'gender'
const uk:UserKey = 'name';

--Partial<T>
프로퍼티를 모두 ?로 바꿔줌 - 일부만 사용하는게 가능
interface User{
    id: number;
    name:string;
    age:number;
    gender:'m'|'f';
}
let admin:Partial<User> = {
    id:2,
    name:'Bob'
};

--Required<T>
프로퍼티를 모두 필수로 바꿔줌 - 모두 작성해야함.

--Readonly<T>
할당만 가능하고 수정은 불가능

--Record<K,T>
<키,타입>
interface Score {
    "1":"A"|"B"|"C"|"D";
    "2":"A"|"B"|"C"|"D";
    "3":"A"|"B"|"C"|"D";
    "4":"A"|"B"|"C"|"D";
}
const score : Score = {
    1:"A",
    2:"B",
    3:"C",
    4:"D"
};

변수 선언할 때 바로 Record 타입으로 선언해버리기
const score : Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
    1:"A",
    2:"B",
    3:"C",
    4:"D"
};

또는 타입으로 분리해서 선언한 뒤 record
type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";
const score = :Record<Grade,Score>=>{
    1:"A",
    2:"B",
    3:"C",
    4:"D"
};

활용예제
interface User{
    id:number;
    name:string;
    age:number;
}
function isValid(user:User){
    const result:Record<keyof User, boolean> ={
        id:user.id >0,
        name:user.name !== "",
        age:user.age>0,
    };
    return result;
};

--Pick<T,K>
t타입에서 k프로퍼티만 골라서 사용한다.
interface User{
    id: number;
    name:string;
    age:number;
    gender:'m'|'f';
}
const admin: Pick<User,"id"|"name">={
    id:0,
    name:"Bob"
};

--Omit<T,K>
t타입에서 k프로퍼티를 생략하고 사용한다.
const admin: Omit<User,"age"|"gender">={
    id:0,
    name:"Bob"
};

--Exclude<T1,T2>
t1에서 t2타입을 제외하고 사용한다.
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

--NonNullable<Type>
null, undefined를 제외한 타입을 생성
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;