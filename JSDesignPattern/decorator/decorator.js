function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
}

const inst = new Vehicle('car');

const truck = new Vehicle('truck');

truck.setModel = function(modelName) {
    this.model = modelName;
};

truck.setColor = function(color) {
    this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

// 装饰的是实例，不会影响 prototype
const secondInst = new Vehicle();
console.log(secondInst);

// ============ v2 ============== /
function Macbook() {
    this.cost = function() {
        return 997;
    };
    this.screenSize = function() {
        return 11.6;
    }
}

function Memory(macbook) {
    const v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    };
}

function Engraving(macbook) {
    const v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    };
}

function Insurance(macbook) {
    const v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    };
}

const mb = new Macbook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());