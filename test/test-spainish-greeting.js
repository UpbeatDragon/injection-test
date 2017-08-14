var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports Spainish', () =>{
    it('Can say Hello', () => {
        var greeter = require('../lib/spainish-greeting');

        return greeter.getGreeting().should.eventually.equal('Hola Mundo!');
    })
})