function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.Add = function(obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function() {
    this.observerList = [];
};

ObserverList.prototype.Count = function() {
    return this.observerList.length;
};

ObserverList.prototype.Get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

// wtf is this?
// 是不是写这书的时候，还没有 splice 方法呢？
// 这 insert，remove 只能处理两头的，有点愚蠢
ObserverList.prototype.Insert = function(obj, index) {
    let pointer = -1;
    if (index === 0) {
        this.observerList.unshift()
        pointer = index;
    } else if (index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }

    return pointer;
};

ObserverList.prototype.IndexOf = function(obj, startIndex) {
    let i = startIndex, pointer = -1;
    while(i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            pointer = i;
        }
        i++;
    }
    return pointer;
};

ObserverList.prototype.RemoveAt = function(index) {
    if (index === 0) {
        this.observerList.shift();
    } else if (index === this.observerList.length - 1) {
        this.observerList.pop();
    }
};

function extend(extension, obj) {
    for (let key in extension) {
        obj[key] = extension[key];
    }
}

function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer) {
    this.observers.Add(observer);
};

Subject.prototype.RemoveObserver = function(observer) {
    this.observers.RemoveAt(this.observers.IndexOf(observer, 0));
};

Subject.prototype.Notify = function(context) {
    const count = this.observers.Count();
    for (let i = 0; i < count; i++) {
        this.observers.Get(i).Update(context);
    }
};

function Observer() {
    this.Update = function() {
        // ....
    }
}

// what's the difference between pub/sub and observer pattern??