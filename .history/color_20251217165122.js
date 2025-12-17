import color from "colors";
import fs from "fs";
import http from "http";

console.log(color.rainbow("Hello, World!"));
/*
only for commonJs type
const color = require("colors");

console.log("Hello, World!".rainbow)
*/

const a = 13;
const b = 23;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
//fs.writeFileSync to create a new file
fs.writeFileSync("hello.txt", "This is Node!");
console.log("File created");

