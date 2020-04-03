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

class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }

  study() {
    console.log(`${name} is studying`)
  }
}

const z = new Student('zz', 27, 15);
z.eat();
z.speak();
z.study();