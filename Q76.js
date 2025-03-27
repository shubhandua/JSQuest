var compactObject = function(obj) {
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj === 'object' && obj !== null) {
        let res = {};
        for (let key in obj) {
            if (obj[key]) res[key] = compactObject(obj[key]);
        }
        return res;
    }
    return obj;
};
