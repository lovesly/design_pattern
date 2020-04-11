class Adaptee {
  specificRequest() {
    return 'Germany plugin';
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }

  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - adaptoor - China plugin`;
  }
}

let target = new Target();
console.log(target.request());

// 例子过于简单。。。