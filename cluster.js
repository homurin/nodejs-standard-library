import os from "os";
import cluster from "cluster";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
  console.info(`Primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.info(`Worker-${worker.id} is exit`);
    //if worker is exit then create new worker
    cluster.fork();
  });
}

if (cluster.isWorker) {
  console.info(`Worker : ${process.pid}`);
  const server = http.createServer((req, res) => {
    res.write(`<h1>Response from process ${process.pid}<h1>`);
    res.end();
    process.exit();
  });
  server.listen(3000, "127.0.0.1");
}
