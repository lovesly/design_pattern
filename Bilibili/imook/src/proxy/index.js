class RealImg {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  display() {
    console.log('display..' + this.filename);
  }

  loadFromDisk() {
    console.log('loading...' + this.filename);
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new RealImg(filename);
  }

  display() {
    this.realImg.display();
  }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();