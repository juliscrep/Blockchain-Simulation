const TransactionAbstract = require('./TransactionAbstract.js');
const TransactionLeafAbstract = require('./TransactionLeafAbstract.js');

class CompoundTransaction extends TransactionAbstract{
    constructor(){
        super();
        this.level = 0;
        this.transactions = [];
    }

    addTransaction(transaction){
        if (this.transactions.length >= 3) {
            // las transacciones compuestas solo pueden tener hasta 3 transacciones
            throw new Error('CompoundTransaction can only contain 3 transactions');
        }
        else {
            if (this.level == 0) {
                if (transaction instanceof CompoundTransaction) {
                    transaction.setLevel(this.level + 1);
                }
                this.transactions.push(transaction);
            }
            else {
                // solo puedo agregar transacciones simples o coinbase o sea TransactionLeafAbstract
                if (transaction instanceof TransactionLeafAbstract) {
                    this.transactions.push(transaction);
                } else {
                    throw new Error('At this level you can only add CoinBase or Simple Transactions');
                }
            }
        }    
    }

    setLevel(newLevel) {
        this.level = newLevel;
    }

}

module.exports = CompoundTransaction;