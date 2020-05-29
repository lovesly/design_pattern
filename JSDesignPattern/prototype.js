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