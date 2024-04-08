var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};
// 파라미터에서 프로퍼티의 타입을 정해주기
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// 변수의 타입 정해주기
var coordinate = { x: 34, y: 2 };
// 리턴 타입 정해주기
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// 초과 프로퍼티 검사
// printName({ first: "Mick", last: "Jagger", age: 24 });
var singer = { first: "Mick", last: "Jagger", age: 24 };
printName(singer);
/* 객체를 다른 변수에 할당하면 first와 last가 있는지만 확인하고
다른건 무시하기 때문에 에러 x
25줄처럼 객체를 직접 대입하면 초과 프로퍼티 검사를 하고 에러 발생*/
// type alias 타입 별칭
var coordinate2 = { x: 34, y: 2 };
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var coordinate3 = { x: 34, y: 2 };
function randomCoordinate3() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint2(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 234345;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123243545,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
