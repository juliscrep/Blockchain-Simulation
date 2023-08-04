const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class SimpleTransaction extends TransactionLeafAbstract {
    constructor(TransactionLeafAbstract,holder,hashMethod) {
        super(holder,hashMethod);
        this.in = TransactionLeafAbstract.getIdentifier();
        this.generateTransactionHash();
    }

    generateTransactionHash() {
        let hashString = this.getIdentifier() + this.in + this.out;
        super.generateTransactionHash(hashString);
    }

    changeHashMethod(hashMethod) {
        super.changeHashMethod(hashMethod);
        this.generateTransactionHash();
    }

    getTransaction() {
        return "Simple Transaction | TX: " + this.getIdentifier() + " - In: " + this.in + " - Out: " + this.out + " - Hash: " + this.hash;
    }
}

module.exports = SimpleTransaction;