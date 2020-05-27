// advanced implementation
// 这里也有点问题，直接把 Subscriber 隔离了，感觉是写错了
(function(root) {
    function guidGenerator() {}
    
    function Subscriber(fn, options, context) {
        if (!(this instanceof Subscriber)) {
            return new Subscriber(fn, context, options);
        } else {
            this.id = guidGenerator();
            this.fn = fn;
            this.options = options;
            this.context = context;
            this.topic = null;
        }
    }

    function Topic(namespace) {
        if (!(this instanceof Topic)) {
            return new Topic(namespace);
        } else {
            this.namespace = namespace || '';
            this._callbacks = [];
            // 讲道理，这里写错了，应该是个对象
            this._topics = {};
            this.stopped = false;
        }
    }

    Topic.prototype = {
        AddSubscriber: function(fn, options, context) {
            const callback = new Subscriber(fn, options, context);
            this._callbacks.push(callback);
            callback.topic = this;
            return callback;
        },
        StopPropagation: function() {
            this.stopped = true;
        },
        GetSubscriber: function(identifier) {
            for (let x = 0; x < this._callbacks.length; x++) {
                if (this._callbacks[x].id === identifier || this._callbacks[x].fn === identifier) {
                    return this._callbacks[x];
                }
            }
            // ? 现在 callbacks 里找？如果没有就遍历所有 topic 
            // 有缺陷啊，这里只会返回第一个 subscriber，有重复的就不管了。
            // 回头看看 mediator 源码，我猜不应该这么敷衍
            for (let z in this._topics) {
                if (this._topics.hasOwnProperty(z)) {
                    const sub = this._topics[z].GetSubscriber(identifier);
                    if (sub !== undefined) {
                        return sub;
                    }
                }
            }
        },
        AddTopic: function(topic) {
            this._topics[topic] = new Topic((this.namespace ? this.namespace + ':' : '') + topic);
        },
        HasTopic: function(topic) {
            return this._topics.hasOwnProperty(topic);
        },
        ReturnTopic: function(topic) {
            return this._topics[topic];
        },
        RemoveSubscriber: function(identifier) {
            // 不传参数，全部清除
            if (!identifier) {
                this._callbacks = [];
                for (let z in this._topics) {
                    if (this._topics.hasOwnProperty(z)) {
                        this._topics[z].RemoveSubscriber(identifier);
                    }
                }
            }
            // 不一致啊？为什么移除的时候，就不管 _topics 数组里的了？？
            for (let i = 0; i < this._callbacks.length; i++) {
                if (this._callbacks[i].fn === identifier || this._callbacks[i].id === identifier) {
                    // ?
                    this._callbacks[i].topic = null;
                    this._callbacks.splice(i, 1);
                    i--;
                }
            }
        },
        // 强烈怀疑，有点问题，这个方法也非常鬼畜
        Publish: function(data) {
            for (let i = 0, x = this._callbacks.length; i < x; i++) {
                const callback = this._callbacks[i];
                callback.fn.apply(callback.context, data);
                // ? wtf is this?
                // 执行 callback 有可能会改变 callbacks 数组吗？
                let len = this._callbacks.length;
                if (len < x) {
                    i--;
                    x = len;
                }
            }

            for(let i in this._topics) {
                if (!this.stopped) {
                    if (this._topics.hasOwnProperty(i)) {
                        this._topics[x].Publish(data);
                    }
                }
            }
            // ? why
            this.stopped = false;
        }
    }

    function Mediator() {
        if (!(this instanceof Mediator)) {
            return new Mediator()
        } else {
            this._topics = new Topic("")
        }
    }

    Mediator.prototype = {
        GetTopic: function(namespace) {
            let topic = this._topics;
            const namespaceHierarchy = namespace.split(":");

            if (namespace === '') {
                return topic;
            }

            if (namespaceHierarchy.length) {
                for (let i = 0; i < namespaceHierarchy.length; i++) {
                    if (!topic.HasTopic(namespaceHierarchy[i])) {
                        topic.AddTopic(namespaceHierarchy[i])
                    }
                    topic = topic.ReturnTopic(namespaceHierarchy[i])
                }
            }
            return topic;
        },
        Subscribe: function(topicName, fn, options = {}, context = {}) {
            const topic = this.GetTopic(topicName);
            const sub = topic.AddSubscriber(fn, options, context);
            return sub;
        },
        GetSubscriber: function(identifier, topic = '') {
            return this.GetTopic(topic).GetSubscriber(identifier);
        },
        Remove: function(topicName, identifier) {
            this.GetTopic(topicName).RemoveSubscriber(identifier);
        },
        // 感觉有点问题
        // 太奇葩了，topic 最后还添加到参数的末尾，干什么用？
        Publish: function(topicName, ...rest) {
            const topic = this.GetTopic(topicName)
            this.GetTopic(topicName).Publish([...rest, topic])
        }
    }

    root.Mediator = Mediator;
    Mediator.Topic = Topic;
    Mediator.Subscriber = Subscriber;
})(window);