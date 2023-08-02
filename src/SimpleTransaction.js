const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class SimpleTransaction extends TransactionLeafAbstract {
    constructor(intx,holder,hashMethod) {
        super(holder,hashMethod);
        this.in = intx.getIdentifier();
        this.generateHash();
    }

    generateHash() {
        let hashString = this.getIdentifier() + this.in + this.out;
        this.hash = this.hasher.hash(hashString);
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