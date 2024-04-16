// typeof
function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}

// truthy
const el = document.getElementById('idInput');
if (el) {
    el;
} else {
    el;
}

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        // word  이 때의 word는 undefined. if로 검사하면 빈배열이더라도 true로 판단함
        console.log('you did not pass in a word');
    }
}


// equality
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
    }
}


// "키" in parameter
interface Movie {
    title: string;
    duration: number;
}
interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
getRuntime({ title: "Amadeus", duration: 140 });



// instanceof
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}



// predicate
interface Cat {
    name: string;
    numLives: number;
}
interface Dog {
    name: string;
    breed: string;
}
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
    // t/f 리턴. ts는 이 결과값으로 animal의 타입을 확인 할 수 없음
    // 그래서 파라미터이름 is 타입 으로 명시. true면 타입O
}
function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        return "Meow";
    } else {
        return "Bark";
    }
}


// 판별유니온
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}
interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}
interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink";
        case ("cow"):
            return "Moooo";
        case ("rooster"):
            return "Cockadoodledoo";
        // 소진검사 never검사   : 가능한 옵션을 다 썼는지
        default:
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}
const steve: Rooster ={
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(steve));




