function createBatcher() {
    let queue = [];
    let timer = null;

    return function batchQuery(query) {
        return new Promise(resolve => {
            queue.push({ query, resolve });

            if (!timer) {
                timer = setTimeout(() => {
                    const batch = queue;
                    queue = [];
                    timer = null;

                    const results = batch.map(({ query }) => query()); 
                    batch.forEach((item, i) => item.resolve(results[i]));
                }, 0);
            }
        });
    };
}

const batchQuery = createBatcher();

function fakeFetch(id) {
    return () => new Promise(res => setTimeout(() => res(`Data for ${id}`), 100));
}

batchQuery(fakeFetch(1)).then(console.log);
batchQuery(fakeFetch(2)).then(console.log);
batchQuery(fakeFetch(3)).then(console.log);
