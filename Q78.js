var objDiff = function(obj1, obj2) {
    let stack = [{ path: "", a: obj1, b: obj2 }];
    let diff = {};

    while (stack.length) {
        let { path, a, b } = stack.pop();
        if (a === b) continue;
        if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
            let keys = path.split(".").filter(Boolean);
            let target = diff;
            while (keys.length > 1) target = target[keys.shift()] ||= {};
            target[keys[0]] = a;
        } else {
            for (let key in a) if (key in b) stack.push({ path: path + "." + key, a: a[key], b: b[key] });
        }
    }
    return diff;
};
