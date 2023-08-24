import timers from "timers/promises";

const data = await timers.setTimeout(2000, {
  name: "Mint",
  packageManager: "apt",
  basedOn: "Ubuntu/Debian",
});
console.info(data);

for await (const startTime of timers.setInterval(1000)) {
  console.info(`Current time is ${new Date()}`);
}
