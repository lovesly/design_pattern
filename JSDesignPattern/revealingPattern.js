const myRevealingModule = function() {
    let privateVar = "Ben CHerry";
    let publicVar = "Hey there!";

    function privateFunction() {
        console.log(`Name: ${privateVar}`);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName,
    };
}();

// more about iife, in es6 age, do we need iife anymore?