var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports English', () =>{
    it('Can say Hello', () => {
        var greeter = require('../lib/english-greeting');

        return greeter.getGreeting().should.eventually.equal('Hello World!');
    })
})