import fs from "fs";

const writer = fs.createWriteStream("stream.log");
writer.write("Vim\n");
writer.write("Better Than\n");
writer.write("Emacs");
writer.end();

const reader = fs.createReadStream("stream.log");
reader.on("data", (data) => {
  console.info(data.toString());
});
