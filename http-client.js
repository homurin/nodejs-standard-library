import https from "https";

const url = "https://eoa67wpuap47096.m.pipedream.net";

const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (res) => {
    res.on("data", (data) => {
      console.info(data.toString());
    });
  }
);

const body = JSON.stringify({
  firstName: "Akemi",
  lastName: "Homura",
});

request.write(body);
request.end();
