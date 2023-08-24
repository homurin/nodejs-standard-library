import util from "util";

const distro = "Mint";
console.info(util.format("I use %s btw :)", distro));

const desc = { name: "mint", basedOn: "Ubuntu/Debian" };
console.info(util.format("Description : %j", desc));
