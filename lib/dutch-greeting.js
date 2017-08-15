greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Hallo Wereld!');
        })
    }
}

module.exports = greeting;