const { v4: uuidv4 } = require('uuid');
const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class SimpleTransaction extends TransactionLeafAbstract {
    
    constructor(intx,holder,hashString,hashMethod) {
        super(holder,hashString,hashMethod);
        this.in = intx.getIdentifier();              
    }

    getTransaction() {
        return "Simple Traansaction | TX:" + this.identifier + " - In: " + this.in + " - OUT: " + this.out + " - Hash: " + this.hash;
    }

}

module.exports = SimpleTransaction;