import fs from "fs/promises";
import zlib from "zlib";

const source = await fs.readFile("zlib.js");
const result = zlib.gzipSync(source);

//create compressed file into ls directory
await fs.writeFile("zlib-compress.text", result);

//decompressing and read the file

const compressedFile = await fs.readFile("zlib-compress.text");
const decompressedFile = zlib.unzipSync(compressedFile);
console.info(decompressedFile.toString());
