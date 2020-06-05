const myMixins = {
    moveUp: function() {
        console.log('move up');
    },
    moveDown: function() {
        console.log('move down');
    },
    stop: function() {
        console.log('stop');
    },
};

const Car = function(settings) {
    this.model = settings.model || 'no model provided';
    this.color = settings.color || 'no colour provided';
};

const Mixin = function() {};

Mixin.prototype = {
    driveForward: function() {
        console.log('forward');
    },
    driveBackward: function() {
        console.log('backward');
    },
    driveSideways: function() {
        console.log('sideways');
    },
};
// 怪怪的，从一个 prototype上copy到另一个 prototype
function augment(receivingClass, givingClass) {
    if (arguments[2]) {
        for (let i = 2; i < arguments.length; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        // 这里控制粒度，是否要把原型链的东西一起copy
        for (let name in givingClass.prototype) {
            if (!receivingClass.prototype.hasOwnProperty(name)) {
                receivingClass.prototype[name] = givingClass.prototype[name];
            }
        }
    }
}

augment(Car, Mixin, 'driveForward', 'driveBackward');

const myCar = new Car({
    model: 'Ford',
    color: 'blue'
});

myCar.driveBackward();
myCar.driveForward();

