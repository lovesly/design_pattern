const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const readline = require('readline');

// 就是观察者？pubsub？
const emitter1 = new EventEmitter();
emitter1.on('some', () => {
  console.log('some is triggered!');
});

emitter1.on('some', () => {
  console.log('some is triggered twice!');
});

emitter1.emit('some');

// class demo
class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const s = new Dog('s');
s.on('bark', function() {
  console.log(`${this.name} barked!`)
});

setTimeout(() => {
  s.emit('bark');
}, 1000);

// Stream 流 也用到了 自定义事件

// readline 也是
const rl = readline.createInterface({
  input: fs.createReadStream('./index.js')
});

let lineNum = 0;
rl.on('line', () => {
  lineNum++;
});
rl.on('close', () => {
  console.log('lineNum: ', lineNum);
});