greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Hola Mundo!');
        })
    }
}

module.exports = greeting;