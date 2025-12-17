import color from "colors";
import fs from "fs";

console.log(color.rainbow("Hello, World!"));
/*
const color = require("colors");

console.log("Hello, World!".rainbow)
*/

const a = 13;
const b = 23;

console.log("Sum:", a + b);
console.log("Difference:", a - b);

fs.writeFileSync("hello.txt", "This is Node!");
console.log("File created");