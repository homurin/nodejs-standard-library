import process from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What linux distribution you use : ", (distro) => {
  console.info(`I using ${distro} on my main machine :)`);
  rl.close();
});
