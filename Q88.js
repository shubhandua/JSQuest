async function delayPromises(promises, delay) {
    let results = [];
    for (let p of promises) {
        results.push(await new Promise(res => setTimeout(() => p.then(res), delay)));
    }
    return results;
}
delayPromises([Promise.resolve(1), Promise.resolve(2)], 1000).then(console.log);
