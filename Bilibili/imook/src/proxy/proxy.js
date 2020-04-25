let star = {
  name: 'zz',
  age: 25,
  phone: '13xxxxx',
};

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      return '168xxx';
    }
    if (key === 'price') {
      return 120000;
    }
    return target[key];
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('Price too low')
      }
    }
  }
});

console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 20000;