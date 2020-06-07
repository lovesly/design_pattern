const { Interface } = require('./interface');
console.log(Interface)
const reminder = new Interface('List', ['summary', 'placeOrder']);

const properties = {
    name: 'Remember to buy the milk',
    date: '05/06/2016',
    actions: {
        summary: function() {
            return 'Remember to buy the milk';
        },
        placeOrder: function() {
            return 'Ordering milk from your local grocery store';
        }
    }
};

function Todo(config) {
    Interface.ensureImplements(config.actions, reminder);

    this.name = config.name;
    this.methods = config.actions;
}

// calling without new??? then this would be window object
const todoItem = new Todo(properties);

console.log(todoItem.methods.summary());
console.log(todoItem.methods.placeOrder());

// abstract decorator 这个例子没看明白
// 看着没什么必要，直接上 typescript 的 interface 不就行了么