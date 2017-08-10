var hello = require('./lib/say-hello');

//hello.use(require('./lib/english-greeting'));
hello.use(require('./lib/deutsche-greeting'));

hello.getGreeting().then(
    (greeting) => {
        console.log(greeting);
    },
    (err) => {
        console.log(err);
    }
)