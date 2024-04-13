// const nums: number[] = [];

const nums: Array<number> = [];
const colors: Array<string> = ["sdfdf","234adf"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "HAcked!";

const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;




function numberIdentity(item: number): number{
    return item;
}

// function stringIdentity(item: string): string{
//     return item;
// }

// function booleanIdentity(item: boolean): boolean{
//     return item;
// } 

function identity<Type>(item: Type): Type{
    return item;
}
identity<number>(7);

interface Cat{
    name: string;
    breed: string;
}
// identity<Cat>({})




function getRandomElement<T>(list: T[]): T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement<string>(["a","b","c"]));
console.log(getRandomElement<number>([2,4,345345]));

//타입 추론가능     객체나 DOM요소는 타입을 명시해야함
getRandomElement(["a","dfs","sdfsdf"]);