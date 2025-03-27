var expect = function(val) {
    return {
        toBe(other) {
            if (val !== other) throw new Error("Not Equal");
        },
        notToBe(other) {
            if (val === other) throw new Error("Equal");
        }
    };
};
