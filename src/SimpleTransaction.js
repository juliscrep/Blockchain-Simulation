const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class SimpleTransaction extends TransactionLeafAbstract {
    
    constructor(TransactionLeafAbstract,holder,hashMethod) {
        super(holder,hashMethod);
        this.in = TransactionLeafAbstract.getIdentifier();
        this.generateHash();
    }

    generateTransactionHash() {
        let hashString = this.getIdentifier() + this.in + this.out;
        super.generateHash(hashString);
    }

    changeHashMethod(hashMethod) {
        super.changeHashMethod(hashMethod);
        this.generateHash();
    }

    getTransaction() {
        return "Simple Transaction | TX: " + this.getIdentifier() + " - In: " + this.in + " - Out: " + this.out + " - Hash: " + this.hash;
    }
}

module.exports = SimpleTransaction;