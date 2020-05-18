import SM from 'javascript-state-machine';

let fsm = new SM({
    init: 'pending',
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected'
        }
    ],
    methods: {
        onResolve: function(state, data) {
            data.onResolveCb.forEach(fn => fn())
        },
        onReject: function(state, data) {
            data.onRejectCb.forEach((fn) => fn());
        }
    }
    
});

class MyPromise {
    constructor(fn) {
        this.onResolveCb = [];
        this.onRejectCb = [];

        fn(this.resolve, this.reject)
    }

    resolve() {
        fsm.resolve(this);
    }

    reject() {
        fsm.reject(this);
    }

    then(resolveFn, rejectFn) {
        this.onResolveCb.push(resolveFn);
        this.onRejectCb.push(rejectFn);
    }


}

function loadImg(src) {
    const promise = new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject();
        }
        img.src = src;
        document.querySelector('body').appendChild(img)
    });
    return promise;
}

let src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589826461623&di=91d4e7920bda0709527f8faeb347415b&imgtype=0&src=http%3A%2F%2Fi.qulishi.com%2Fuploads%2Fnews%2F201603%2F1458878100647153.jpg";

let result = loadImg(src);

result.then(function() {
    console.log('ok1')
}, function() {
    console.log('fail1')
});

result.then(function() {
    console.log('ok2')
}, function() {
    console.log('fail2')
});