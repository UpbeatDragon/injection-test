greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Hello World!');
        })
    }
}

module.exports = greeting;