const { v4: uuidv4 } = require('uuid');

class Token{
    constructor(){
        this.identifier = 'TKN-'+uuidv4();
    }
    getIdentifier(){
        return this.identifier;
    }
}

module.exports = Token;