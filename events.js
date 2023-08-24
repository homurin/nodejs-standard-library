import { EventEmitter } from "events";

const emitter = new EventEmitter();
// on is alias for addListener
emitter.on("hello", (distro) => {
  console.info(`I Use ${distro} BTW :)`);
});

emitter.on("hello", (distro) => {
  console.info(`Omong-omong saya menggunakan ${distro} :D`);
});

emitter.emit("hello", "Mint");
