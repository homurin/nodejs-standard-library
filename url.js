import { URL } from "url";

const url = new URL(
  "https://www.linuxmint.com/download.php?mirror=indonesia&edition=xfce"
);
console.info(`url : ${url.toString()}`);
console.info(`protocol : ${url.protocol}`);
console.info(`hostname : ${url.host}`);
console.info(`path name : ${url.pathname}`);
console.info(url.searchParams);

//modified url

url.host = "ubuntu";
url.searchParams.append("status", "official");
console.info(url.toString());
