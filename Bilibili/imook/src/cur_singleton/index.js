class SingleObject {
    login() {
        console.log('login...');
    }
}

// iife 还有意义吗？
SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})();

// 还是可以的哈，这个就需要多调用一次。
SingleObject.getInstance2 = function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
};

let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();
console.log('obj1 === obj2', obj1 === obj2);