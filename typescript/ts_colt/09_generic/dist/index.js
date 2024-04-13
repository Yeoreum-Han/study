"use strict";
// const nums: number[] = [];
const nums = [];
const colors = ["sdfdf", "234adf"];
const inputEl = document.querySelector("#username");
inputEl.value = "HAcked!";
const buttonEl = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
// function stringIdentity(item: string): string{
//     return item;
// }
// function booleanIdentity(item: boolean): boolean{
//     return item;
// } 
function identity(item) {
    return item;
}
identity(7);
// identity<Cat>({})
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
