const pubsub = {};
(function(q) {
  let topics = {};
  let subUid = -1;

  q.publish = function(topic, args) {
    if (!topics[topic]) {
      return false;
    }
    const subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;
    while (len--) {
      subscribers[len].func(topic, args)
    }
    // chaining??
    return this;
  };

  q.subscribe = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    const token = (++subUid).toString();
    topics[topic].push({
      token,
      func,
    });
    return token;
  };

  q.unsubscribe = function(token) {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0; i < topics[m].length; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
  }
})(pubsub)

// using it
const messageLogger = function(topics, data) {
  console.log(`Logging: ${topics}: ${data}`);
};

const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

pubsub.publish('inbox/newMessage', 'Hello asshole');
