import fs from "fs/promises";

//Read a file in file system
// Read a file using with async readFile() which using promise
// convert buffer to string
// const buffer = await fs.readFile("file-system.js", "UTF-8");
const buffer = await fs.readFile("file-system.js");

console.info(buffer.toString());

//Write a file in file system

fs.writeFile("foo.text", "nano\nbetter than\nvim");
