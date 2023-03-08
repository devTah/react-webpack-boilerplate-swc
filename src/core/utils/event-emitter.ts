import { receiveData } from '@core';

export default class EventEmitter {
  _listeners: any;

  constructor() {
    this._listeners = {};
    this.on = this.on.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.emit = this.emit.bind(this);
  }

  on(event: keyof typeof receiveData | any, listener?: any) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }
    this._listeners[event].push(listener);
    return this;
  }

  removeEventListener(event?: any, listener?: any) {
    if (this._listeners[event]) {
      this._listeners[event] = this._listeners[event].filter((l) => l !== listener);
    }
  }
  removeAllEventListeners(event) {
    if (this._listeners[event]) {
      delete this._listeners[event];
    }
  }

  emit(event, ...args) {
    const cbs = this._listeners[event];
    if (cbs) {
      cbs.forEach((cb) => cb(...args));
    }
  }
}
