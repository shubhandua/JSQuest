const infinite = new Proxy(function () {}, {
    get: (target, prop) => new Proxy(() => prop, this)
});
console.log(infinite.a.b.c());

