var _greeting;

sayHello = {

    use: function(language) {
        _greeting = language;
    },

    getGreeting: function() {
        return new Promise(function(resolve, reject){
            _greeting.getGreeting().then(
                (greeting) => {
                    resolve(greeting);
                },
                (err) => {
                    reject(err);
                }
            )
        })
    }
}

module.exports = sayHello;