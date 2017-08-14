var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('It supports french', () =>{
    it('Can say Hello', () => {
        var greeter = require('../lib/french-greeting');

        return greeter.getGreeting().should.eventually.equal('Bonjour le monde!');
    })
})