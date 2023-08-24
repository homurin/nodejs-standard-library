import { parentPort, threadId } from "worker_threads";

parentPort.on("message", (msg) => {
  for (let i = 0; i < msg; i++) {
    console.log(`thread ${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});
