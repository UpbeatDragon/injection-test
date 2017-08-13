var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports Polish', () =>{
    it('Can say Hello', () => {
        var greeter = require('../lib/polish-greeting');

        return greeter.getGreeting().should.eventually.equal('Witaj świecie!');
    })
})