class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    subscribe(event, cb) {
        if (!this.events.has(event)) this.events.set(event, []);
        this.events.get(event).push(cb);
        return { unsubscribe: () => this.events.set(event, this.events.get(event).filter(fn => fn !== cb)) };
    }

    emit(event, args = []) {
        return this.events.has(event) ? this.events.get(event).map(fn => fn(...args)) : [];
    }
}
