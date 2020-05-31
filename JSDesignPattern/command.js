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