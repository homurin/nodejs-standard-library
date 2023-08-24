import http from "http";

const server = http.createServer((req, res) => {
  console.info(`Method : ${req.method}`);
  console.info(`URL : ${req.url}`);

  //res req
  if (req.method === "POST") {
    req.on("data", (data) => {
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
    });
  }
  // else {
  //   if (req.url === "/") {
  //     res.write("Welcome to http sever");
  //   } else {
  //     res.write(`Hello ${req.url}`);
  //   }
  // }

  //simple ex
  // console.table(req.headers);
  // if (req.url !== "/") {
  //   res.write(`Hello ${req.url}`);
  // } else {
  //   res.write("Hi Anonymous :)");
  // }
  // res.end();
});

server.listen(8080, "127.0.0.1");
