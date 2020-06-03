function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
}

function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function VehicleFactory() {}

// 这个 vehicle class 设置有点多余啊
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
    if (options.vehicleType === "car") {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
};

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: "car",
    color: 'yellow',
    doors: 6,
});

console.log(car instanceof Car);
console.log(car);

// weird example
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
    state: 'omg...so bad',
    color: 'pink',
    wheelSize: 'so big',
});

console.log(myBigTruck instanceof Truck);
console.log(myBigTruck);