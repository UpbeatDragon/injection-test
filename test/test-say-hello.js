var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

const _cannedGreeting = 'Hello Foo!'

describe('It can say hello', () =>{
    it('Can say Hello', () => {
        var greeter = require('../lib/say-hello');

        greeter.use({
            getGreeting: function() {
                return new Promise(function(resolve, reject){
                    resolve(_cannedGreeting);
                })
            }
        });

        return greeter.getGreeting().should.eventually.equal(_cannedGreeting);
    });
    it('Can handle rejection', () => {
        var greeter = require('../lib/say-hello');

        greeter.use({
            getGreeting: function() {
                return new Promise(function(resolve, reject){
                    reject('I am broken!');
                })
            }
        });

        return greeter.getGreeting().should.be.rejected;
    })
})