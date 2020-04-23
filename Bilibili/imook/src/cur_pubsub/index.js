// 简易版本，按理说 subscribe 至少要接受一些参数，JS Pattern 那个版本挺好的。
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(val) {
    this.state = val;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    for (let i of this.observers) {
      i.update();
    }
  }

  subscribe(obj) {
    this.observers.push(obj);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    // 有点奇怪了这里
    this.subject.subscribe(this);
  }
  update() {
    console.log(`${this.name} updated, state: ${this.subject.getState()}`)
  }
}

// 感觉这个实现就不太好，很耦合的感觉，我一个 observer 初始化的时候就绑定了一个 subject
// 估计后面几集会改进一下，不然太蠢了

let s = new Subject();
let obj1 = new Observer('z', s);
let obj2 = new Observer('s', s);

s.setState(10);