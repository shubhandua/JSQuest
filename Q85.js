function nextDay(date) {
    let d = new Date(date);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
}
console.log(nextDay("2025-03-31"));
