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

  static selfBind(context, prefix) {
    let handlers = EventBinder.extractHanders(context, prefix);
    Object.keys(handlers).forEach((k) => {
      console.log(k);
      context[k] = handlers[k].bind(context);
    });
  }
}

export default EventBinder;
