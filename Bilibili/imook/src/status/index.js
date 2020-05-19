import './stateMachine';
import './promise';

class State {
    constructor(color) {
        this.color = color;
    }

    handle(ctx) {
        console.log(`turn to ${this.color} light`);
        ctx.setState(this);
    }
}

class Context {
    constructor() {
        this.state = null;        
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}

let context = new Context();

let green = new State('green');
let yellow = new State('yellow');
let red = new State('red');

//  这个调用方式真是奇葩。。。
green.handle(context);