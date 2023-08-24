const buffer = Buffer.from("Debian/GNU Linux x64_86");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("RGViaWFuL0dOVSBMaW51eCB4NjRfODY=", "base64");

console.info(bufferBase64.toString("utf-8"));
