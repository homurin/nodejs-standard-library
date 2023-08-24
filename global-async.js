function fooPromise() {
  return Promise.resolve("Hello");
}

const greeting = await fooPromise();
console.info(greeting);
