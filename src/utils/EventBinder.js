class EventBinder {
  static extractHanders(obj, prefix) {
    let handlers = {};
    Object.keys(obj).forEach((k) => {
      if (typeof obj[k] === 'function' && k.slice(0, prefix.length) === prefix) {
        handlers[k] = obj[k];
      }
    });

    return handlers;
  }
}

export default EventBinder;
