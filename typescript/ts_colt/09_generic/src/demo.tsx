// function getRandomElement<T>(list: T[]): T{
//     const randIdx = Math.floor(Math.random() * list.length);
//     return list[randIdx];
// }


// tsx에서  <T,>  쉼표붙이기
const getRandomElementReact = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}


// 여러 타입을 가진 제네릭 <T, U>
function merge<T, U>(object: T, object2: U){
    return {
        ...object,
        ...object2
    };
}
const comboObj = merge({name: "colt"}, {pets: ["blue", "elton"]});



// 타입 제한하기 extends
function merge2<T extends object, U extends object>(object: T, object2: U){
    return {
        ...object,
        ...object2
    };
}
console.log(merge2({name:"Colt"},{num:9}));   // merge2(object: object, object2: object): object

interface Lengthy {
    length: number;
}
function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}
printDoubleLength("sdfasdfsdf");
// printDoubleLength(232);

//굳이 제네릭을 쓰지 않아도 되는 함수이지만...
function printDoubleLength2(thing: Lengthy): number {
    return thing.length * 2;
}




//기본 타입 파라미터 지정
function makeEmptyArray<T = number>(): T[]{
    return [];
}
const numbers = makeEmptyArray();
const bools = makeEmptyArray<boolean>();




// 제네릭 클래스
interface Song{
    title: string;
    artist: string;
}
interface Video{
    title: string;
    creator: string;
    resolution: string;
}
// class VideoPlayList{
//     public videos: Video[] = [];
// }
// class SongPlayList{
//     public songs: Song[] = [];
// }
class PlayList<T>{
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el);
    }
}
const songs = new PlayList<Song>();
// songs.add();
const videos = new PlayList<Video>();