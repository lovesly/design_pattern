let id = 0;
const myCar = {
  name: 'Ford Escort',
  drive: function() {
    console.log(`I'm driving`);
  },
  panic: function() {
    console.log('Oops');
  }
};

const yourCar = Object.create(myCar);
console.log(yourCar.name);

const vehicle = {
  getModel: function() {
    console.log('The model is: ', this.model);
  }
};

const car = Object.create(vehicle, {
  'id': {
    value: id++,
    enumerable: true
  },
  'model': {
    value: 'Ford',
    enumerable: true
  }
});

// simulate Object.create
const vehiclePrototype = {
  init: function(model) {
    this.model = model;
  },
  getModel: function() {
    console.log('The model is: ', this.model);
  }
};

function myVehicle(model) {
  function F() {}
  F.prototype = vehiclePrototype;
  const f = new F();
  f.init(model);
  return f;
}

const car2 = myVehicle('Ford');
car2.getModel();


// v3
const beget = (function() {
  function F() {}
  return function(proto) {
    F.prototype = proto;
    return new F()
  }
})()