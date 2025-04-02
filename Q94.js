function immutabilityHelper(obj, updates) {
    return Object.keys(updates).reduce((newObj, key) => {
        newObj[key] = updates[key] instanceof Function ? updates[key](obj[key]) : updates[key];
        return newObj;
    }, { ...obj });
}
console.log(immutabilityHelper({ a: 1, b: 2 }, { a: val => val + 1, b: 3 }));

