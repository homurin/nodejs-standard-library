import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("console.log");
const log = new Console({
  stderr: logFile,
  stdout: logFile,
});

log.info("Hello World");
log.error("Tehe");

const wifu = {
  firstName: "Akemi",
  lastName: "Homura",
};

log.table(wifu);
