function update(obj, command) {
    if ('$set' in command) return command['$set'];
    if ('$merge' in command) return { ...obj, ...command['$merge'] };
    if ('$push' in command) return [...obj, ...command['$push']];
    if ('$apply' in command) return command['$apply'](obj);

    let result = Array.isArray(obj) ? [...obj] : { ...obj };
    for (let key in command) {
        result[key] = update(obj[key], command[key]);
    }
    return result;
}
console.log(update({ a: 1, b: 2 }, { a: { $set: 5 } }));
