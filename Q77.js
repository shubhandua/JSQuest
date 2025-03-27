var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [], count = 0;
        functions.forEach((fn, i) => {
            fn().then(res => {
                results[i] = res;
                if (++count === functions.length) resolve(results);
            }).catch(reject);
        });
    });
};
