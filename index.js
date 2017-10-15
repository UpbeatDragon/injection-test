var hello = require('./lib/say-hello');

hello.use(require('./lib/english-greeting'));
//hello.use(require('./lib/deutsche-greeting'));
//hello.use(require('./lib/polish-greeting'))
//hello.use(require('./lib/spainish-greeting'))
//hello.use(require('./lib/french-greeting'))
hello.use(require('./lib/dutch-greeting'))
hello.getGreeting().then(
    (greeting) => {
        console.log(greeting);
    },
    (err) => {
        console.log(err);
        
    }
)
