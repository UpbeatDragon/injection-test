greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Witaj świecie!');
        })
    }
}

module.exports = greeting;