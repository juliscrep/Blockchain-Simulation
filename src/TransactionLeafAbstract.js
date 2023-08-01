const { v4: uuidv4 } = require('uuid');
const TransactionAbstract = require('./TransactionAbstract');
const crypto = require('crypto');

class TransactionLeafAbstract extends TransactionAbstract {

    constructor(holder,hashString,hashMethod) {
        this.identifier = "TX-" + uuidv4();
        this.out = holder.getDigitalAddress();
        this.hash = crypto.createHash(hashMethod).update(hashString).digest('hex');                
    }

    getIdentifier() {
        return this.identifier;
    }

}

module.exports = TransactionLeafAbstract;