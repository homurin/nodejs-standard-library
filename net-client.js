import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "127.0.0.1",
});

client.on("data", (data) => {
  console.info(`Receive data from server : ${data}`);
});

setInterval(() => {
  client.write("ping\r\n");
}, 2000);
