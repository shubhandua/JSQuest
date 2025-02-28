class EventEmitter {
    constructor() {
      this.events = new Map();
    }
  
    // Register an event listener
    on(event, listener) {
      if (!this.events.has(event)) {
        this.events.set(event, []);
      }
      this.events.get(event).push(listener);
      return this;
    }
  
    // Register a one-time event listener
    once(event, listener) {
      const wrapper = (...args) => {
        this.off(event, wrapper);
        listener.apply(this, args);
      };
      this.on(event, wrapper);
      return this;
    }
  
    // Remove an event listener
    off(event, listener) {
      if (!this.events.has(event)) return this;
      const listeners = this.events.get(event).filter(l => l !== listener && l.original !== listener);
      if (listeners.length > 0) {
        this.events.set(event, listeners);
      } else {
        this.events.delete(event);
      }
      return this;
    }
  
    // Emit an event
    emit(event, ...args) {
      if (!this.events.has(event)) return false;
      this.events.get(event).forEach(listener => listener.apply(this, args));
      return true;
    }
  
    // Remove all listeners for an event
    removeAllListeners(event) {
      if (this.events.has(event)) {
        this.events.delete(event);
      }
      return this;
    }
  
    // Get the number of listeners for an event
    listenerCount(event) {
      return this.events.has(event) ? this.events.get(event).length : 0;
    }
  
    // Get a copy of the listeners array for an event
    listeners(event) {
      return this.events.has(event) ? [...this.events.get(event)] : [];
    }
  }
  