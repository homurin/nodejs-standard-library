import net from "net";

const server = net.createServer((client) => {
  console.info("Connected");
  client.on("data", (data) => {
    console.info(`Receive data ${data.toString()}`);
    client.write(`Hello ${data}\r\n`);
  });
});

server.listen(3000, "127.0.0.1");
