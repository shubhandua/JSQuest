var checkIfInstanceOf = function(obj, classFunction) {
    while (obj) {
        if (obj.constructor === classFunction) return true;
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};
