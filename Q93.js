const infiniteObject = new Proxy({}, {
    get: (_, prop) => () => prop
});
console.log(infiniteObject.hello());
console.log(infiniteObject.world());
