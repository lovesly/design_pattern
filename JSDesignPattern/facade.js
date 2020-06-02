// 和代理有什么本质区别？
const module = (function() {
    const _private = {
        i: 5,
        get: function() {
            return this.i;
        },
        set: function(val) {
            this.i = val;
        },
        run: function() {
            console.log('running')
        },
    };

    return {
        facade: function(args) {
            _private.set(args.val);
            _private.get();
            if (args.run) {
                _private.run();
            }
        }
    };
})();

module.facade({
    run: true,
    val: 10
});