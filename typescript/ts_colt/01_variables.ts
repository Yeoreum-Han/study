let movieTitle : string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;

let numCatLives : number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver : boolean = false;
gameOver = true;
// gameOver = "true";



//type Inference    일반적으로 타입추론이 가능하기에 타입을 명시할 필요는 없음
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = "ads";



//any type : ts에만 존재, 어떤 타입도 가능
let thing : any ="hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase();  //변수에 없는 메서드에도 접근가능
/*
let thing = "hello";
thing()  이건 오류
thing.sdfawer() 이것도 오류
*/



//변수 초기화를 나중에 하면 암묵적으로 any타입이 되므로 필요한 경우 반드시 타입명시. 
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie : string;
//Variable 'foundMovie' implicitly has an 'any' type, but a better type may be inferred from usage.
for(let movie in movies) {
    if(movie === "Amadeus"){
        foundMovie = "Amadeus";
    }
}
// foundMovie(); 이건 이제 오류
