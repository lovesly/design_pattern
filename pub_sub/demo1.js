const publisher = {
    subscribers: {
        any: [],
    },
    subscribe: function(fn, type) {
        type = type || 'any';
        if (!subscribers[type]) {
            subscribers[type] = [];
        }
        subscribers[type].push(fn);
    },
    unsubscribe: function(fn, type) {
        this._visitSubscribers('unsubscribe', fn, type);
    },
    publish: function(publication, type) {
        this._visitSubscribers('publish', publication, type);
    },
    _visitSubscribers: function(action, arg, type) {
        const type = type || 'any';
        const subscribers = this.subscribers[type];
        for (let i = subscribers.length; i >= 0; i--) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else if (action === 'unsubscribe') {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePublisher(obj) {
    for (let i of Reflect.ownKeys(obj)) {
        if (typeof obj[i] === 'function') {
            o[i] = publisher[i];
        }
        o.subscribers = { any: [] };
    }
}