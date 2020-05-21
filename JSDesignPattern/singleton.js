const mySingleton = (function() {
    let instance;
    
    function init() {
        function privateMethod() {
            console.log('I am private');
        }

        let privateVariable = 'Im also private';
        let privateRandom = Math.random();

        return {
            publicMethod: function() {
                console.log('The public can see me!');
            },
            publicProperty: 'Im also public',
            getRandomNumber: function() {
                return privateRandom;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();