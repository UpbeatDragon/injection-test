greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Bonjour le monde!');
        })
    }
}

module.exports = greeting;