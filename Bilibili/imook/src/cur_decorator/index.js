@annotation
class Circle {
  constructor(name) {
    this.name = name;
  }
  draw() {
    console.log('drawing...');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw();
    this.setRedBorder(this.circle);
    console.log(this.circle.annotated)
    console.log(Circle.annotated)
  }

  setRedBorder(circle) {
    console.log('set red border: ', circle.name)
  }
}

function annotation(target) {
  target.annotated = true;
}

let circle = new Circle('Yo');

let deco = new Decorator(circle);
deco.draw();