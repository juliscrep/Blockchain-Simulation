const { v4: uuidv4 } = require('uuid');
const TransactionAbstract = require('./TransactionAbstract');

class TransactionLeafAbstract extends TransactionAbstract {

    constructor(holder,hashMethod) {

        if (new.target === TransactionLeafAbstract) {
            throw new Error('TransactionLeafAbstract is an abstract class and could not be instantiated directly');
        }

        super();
        this.identifier = "TX-" + uuidv4();
        this.out = holder.getDigitalAddress();
        this.hasher = hashMethod;
    }

    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
    }
    
    getIdentifier() {
        return this.identifier;
    }

}

module.exports = TransactionLeafAbstract;