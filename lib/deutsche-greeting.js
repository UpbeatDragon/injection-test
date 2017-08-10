greeting = {
    getGreeting: function() {
        return new Promise(function(resolve, reject) {
            resolve('Hallo Welt!');
        })
    }
}

module.exports = greeting;