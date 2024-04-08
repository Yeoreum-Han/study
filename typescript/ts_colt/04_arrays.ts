const activeUsers: string[] = [];
activeUsers.push("Tony");
// activeUsers.push(12); 

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = "asdf";

const bools: Array<boolean> = [];
// const bools : boolean[] = [] 같은것

type Point = {
    x: number;
    y: number;
}
// const coords: Array<Point> = [];
const coords: Point[] = [];
coords.push({ x: 23, y: 6 });



// 다차원배열
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];
const demo: number[][][] = [[[1]]];