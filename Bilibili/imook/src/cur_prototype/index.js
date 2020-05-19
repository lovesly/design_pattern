const prototype = {
    getName: function() {
        return this.first
    },
    say: function() {
        alert('Hi')
    }
};

let x = Object.create(prototype);
x.first = 'ZZ';

console.log(x.getName());
x.say();