const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

// 파라미터에서 프로퍼티의 타입을 정해주기
function printName(person: { first: string; last: string }) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });



// 변수의 타입 정해주기
let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// 리턴 타입 정해주기
function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}



// 초과 프로퍼티 검사
// printName({ first: "Mick", last: "Jagger", age: 24 });

const singer = { first: "Mick", last: "Jagger", age: 24 };
printName(singer);
/* 객체를 다른 변수에 할당하면 first와 last가 있는지만 확인하고 
다른건 무시하기 때문에 에러 x
25줄처럼 객체를 직접 대입하면 초과 프로퍼티 검사를 하고 에러 발생*/



// type alias 타입 별칭
let coordinate2: { x: number; y: number } = { x: 34, y: 2 };
function randomCoordinate2(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point: { x: number; y: number }): { x: number; y: number } {
    return { x: point.x * 2, y: point.y * 2 };
}
// 이렇게 객체타입 반복하기 보다 새로운 타입 이름을 만드는 것이 좋음

type Point = {
    x: number;
    y: number;
};
let coordinate3: Point = { x: 34, y: 2 };
function randomCoordinate3(): Point {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint2(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number;
let age: MyNum = 234345;



//nested Objects 중첩 객체
type Song = { 
    title: string; 
    artist: string; 
    numStreams: number; 
    credits: { 
        producer: string; 
        writer: string; 
    };
};
function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}
function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`);
}
const mySong : Song = {
    title: "Unchained Melody",
        artist: "Righteous Brothers",
            numStreams: 123243545,
                credits: {
        producer: "Phil Spector",
            writer: "Alex North"
    }
}
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);



//optional properties 선택적 프로퍼티   프로퍼티뒤에 ?를 붙여서 만듦
type Points = {
    x: number;
    y: number;
    z?: number;    //있어도 없어도 되는 프로퍼티
};
const myPoints: Points = {x:1, y:2};



// readonly     modifier in ts  객체의 특정프로퍼티/배열/클래스에 사용
type User = {
    readonly id: number;
    username : string;
};
const user: User = {
    id: 12344,
    username: "catgurl"
}
console.log(user.id);
// user.id = 2345435;   readonly라 변경 불가. !객체나 배열은 참조타입이므로 수정 가능



// intersection type 교차타입   여러타입을 앰퍼샌드기호(&)로 결합
type Circle = {
    radius: number;
};
type Colorful = {
    color: string;
};
type ColorfulCircle = Circle & Colorful;
const happyFace : ColorfulCircle = {
    radius: 4,
    color: "yellow"
};

type Cat = {
    numLives: number
};
type Dog = {
    breed: string
};
type CatDog = Cat & Dog & {
    age:number;         //타입을 결합하고 &로 추가할 수 있음
};
const christy: CatDog = {
    numLives: 7,
    breed: "husky",
    age: 9
};
