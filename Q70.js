Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};
// another mothed below



Array.prototype.last = function() {
    return this.at(-1) ?? -1;
};
