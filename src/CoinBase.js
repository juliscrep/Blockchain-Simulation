const { v4: uuidv4 } = require('uuid');
const TransactionLeafAbstract = require('./TransactionLeafAbstract');

class CoinBase extends TransactionLeafAbstract {
    
    constructor(token,holder,hashString,hashMethod) {
        super(holder,hashString,hashMethod);
        this.tkn = token.getIdentifier();
    }

    getTransaction() {
        return "Coinbase | TX:" + this.identifier + " - Token: " + this.tkn + " - OUT: " + this.out + " - Hash: " + this.hash;
    }

}

module.exports = CoinBase;