import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.js");
const worker2 = new Worker("./worker.js");

worker1.postMessage(3);
worker2.postMessage(3);

worker1.on("message", (msg) => {
  console.info(`Thread ${threadId} receive from worker 1 : ${msg}`);
});

worker2.on("message", (msg) => {
  console.info(`Thread ${threadId} receive from worker 12 : ${msg}`);
});
