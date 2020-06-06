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