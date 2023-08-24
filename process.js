import process from "process";

process.on("exit", (code) => {
  console.info("Done execute the NodeJS code :)");
  console.info(`NodeJS Exit with code : ${code}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
// console.table(process.env);

process.exit(2);
console.info("Alredy exit, So not executed '-'");
