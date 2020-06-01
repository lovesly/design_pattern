// 例子不太好啊
(function() {
    const CarManager = {
        requestInfo: function(model, id) {
            return `${model} - ${id}`;
        },
        buyVehicle: function(model, id) {
            return `${model} - ${id}`;
        },
        arrangeViewing: function(model, id) {
            return `${model} - ${id}`;
        }
    }
})()

CarManager.execute = function(name) {
    return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};

// 没看明白，这样调用的方式，如果方法变了，我们还是要修改每个调用的地方？？
// CarManager.execute('buyVehicle', 'Ford Escort', '33443')

// example2
// 这个还清晰一点点
const setCommand = function(btn, func) {
    btn.onclick = function() {
        func();
    };
};

const MenuBar = {
    run: function() {
        console.log('refresh menubar');
    }
};

const generateCommand = (receiver) => () => {
    receiver.run();
};

setCommand({}, generateCommand(MenuBar));

// example3
// http://www.isjs.cn/?p=989

// 有点意思，但是感觉和上面两个不太像
const stock = function() {
    this.name = 'baidu';
    this.quantity = 100;
    this.buy = function() {}
    this.sell = function() {}
};

const BuyStock = function(stock) {
    this.stock = stock;
    this.execute = function() {
        this.stock.buy();
    }
};

var SellStock = function(stock){
    this.stock = stock;
    this.execute = function(){
        this.stock.sell();
    }
};

const Broker = function() {
    this.orderList = [];
    this.takeOrder = function(order) {
        this.orderList.push(order);
    }

    this.placeOrders = function() {
        this.orderList.map(item => {
            item.execute();
        })
        this.orderList = [];
    }
};

const stock = new stock();
const buyStock = new BuyStock(stock);
const sellStock = new SellStock(stock);
const borker = new Broker();
borker.takeOrder(buyStock);
broker.takeOrder(sellStock);
broker.placeOrders();