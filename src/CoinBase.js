const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class CoinBase extends TransactionLeafAbstract {
    constructor(token,holder,hashMethod) {
        super(holder,hashMethod);
        this.token = token;
        this.tkn = token.getIdentifier();
        this.generateTransactionHash();
    }

    generateTransactionHash() {
        let hashString = this.getIdentifier() + this.tkn + this.out;
        super.generateTransactionHash(hashString);
    }
    
    getTransaction() {
        return "Coinbase | TX:" + this.identifier + " - Token: " + this.tkn + " - OUT: " + this.out + " - Hash: " + this.hash;
    }

    changeHashMethod(hashMethod) {
        super.changeHashMethod(hashMethod);
        this.generateTransactionHash();
    }
}

module.exports = CoinBase;