// 从入口开始执行
console.log('JS code from demo1.js');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    console.log(`${name} is eatting`);
  }

  speak() {
    console.log(`${name} is speaking`);
  }
}

const z = new Person('zz', 27);
z.eat();
z.speak();