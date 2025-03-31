function jsonStringToObject(jsonStr) {
    return JSON.parse(jsonStr);
}
console.log(jsonStringToObject('{"name":"John","age":30}'));