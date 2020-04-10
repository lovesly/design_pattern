class Product {
    constructor(name) {
        this.name = name;
    }

    init() {
        console.log('init')
    }

    fn1() {
        console.log('fn1')
    }

    fn2() {
        console.log('fn2')
    }
}

// 开放封闭原则，构造函数与工厂函数隔离
// 讲解比较简单，不如另一个 c++ 版本的设计模式清晰
class Creator {
    create(name) {
        return new Product(name);
    }
}

let creator = new Creator();
let p1 = creator.create('p1');
p1.init();