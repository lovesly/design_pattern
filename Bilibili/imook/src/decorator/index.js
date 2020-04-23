import Lib from './libs';
@annotation
class Circle {
  constructor(name) {
    this.name = name;
  }
  draw() {
    console.log('drawing...');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw();
    this.setRedBorder(this.circle);
    console.log(this.circle.annotated)
    console.log(Circle.annotated)
  }

  setRedBorder(circle) {
    console.log('set red border: ', circle.name)
  }
}


let circle = new Circle('Yo');

let deco = new Decorator(circle);
deco.draw();

function annotation(target) {
  target.annotated = true;
}

// 带参数装饰器
function testDec(isDec) {
  return function(target) {
    target.isDec = isDec;
  }
}

@testDec
class Demo2 {}

// mixin
function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list);
  }
}

const Foo = {
  foo() {
    alert('Foo');
  }
}

@mixins(Foo)
class Demo3 {}

let obj3 = new Demo3();
obj3.foo();


// 装饰方法 1
class Demo4 {
  constructor() {
    this.first = 'S';
    this.last = 'L';
  }
  // 这为什么是一个属性啊，不应该是方法吗？
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

const p = new Demo4();
console.log(p.name());

// 报错
// p.name = 2;

// 装饰方法 2
class Demo5 {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  const oldVal = descriptor.value;
  descriptor.value = function() {
    // ? arguments log 不出来么？
    console.log(arguments);
    console.log(`calling [${name}] with ${arguments}`);
    return oldVal.apply(this, arguments);
  };
  return descriptor;
}

const obj5 = new Demo5();
obj5.add(3, 4);

// libs
const obj6 = new Lib();
console.log('=====================');
obj6.facepalm();
obj6.facepalmHard();
obj6.facepalmHarder();