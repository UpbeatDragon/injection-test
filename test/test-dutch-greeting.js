var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports dutch', () =>{
    it('Can say Hallo', () => {
        var greeter = require('../lib/dutch-greeting');

        return greeter.getGreeting().should.eventually.equal('Hallo Welt!');
    })
})