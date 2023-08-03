const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class CoinBase extends TransactionLeafAbstract {
    
    constructor(token,holder,hashMethod) {
        super(holder,hashMethod);
        this.tkn = token.getIdentifier();
        this.generateHash();
    }

    generateHash() {
        let hashString = this.getIdentifier() + this.tkn + this.out;
        this.hash = this.hasher.hash(hashString);
    }

    changeHashMethod(hashMethod) {
        super.changeHashMethod(hashMethod);
        this.generateHash();
    }

    getTransaction() {
        return "Coinbase | TX:" + this.identifier + " - Token: " + this.tkn + " - OUT: " + this.out + " - Hash: " + this.hash;
    }
}

module.exports = CoinBase;