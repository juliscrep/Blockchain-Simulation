const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class CoinBase extends TransactionLeafAbstract {
    constructor(token,holder,hashMethod) {
        super(holder,hashMethod);
        this.tkn = token.getIdentifier();
        this.generateHash();
    }

    generateTransactionHash() {
        let hashString = this.getIdentifier() + this.tkn + this.out;
        super.generateHash(hashString);
    }

    getTransaction() {
        return "Coinbase | TX:" + this.identifier + " - Token: " + this.tkn + " - OUT: " + this.out + " - Hash: " + this.hash;
    }
}

module.exports = CoinBase;