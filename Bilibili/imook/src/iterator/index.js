class Iterator {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.list.length;
  }

  next() {
    return this.hasNext() ? this.list[this.index++] : undefined;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }

  getGenerator() {
    return new Iterator(this.list);
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let c = new Container(arr).getGenerator();


while (c.hasNext()) {
  console.log(c.next());
}

