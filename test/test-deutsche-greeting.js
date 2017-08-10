var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports Deutsche', () =>{
    it('Can say Hallo', () => {
        var greeter = require('../lib/deutsche-greeting');

        return greeter.getGreeting().should.eventually.equal('Hallo Welt!');
    })
})