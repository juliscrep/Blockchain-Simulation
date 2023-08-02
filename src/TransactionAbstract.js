class TransactionAbstract{
    constructor() {
        if (new.target === TransactionAbstract) {
            throw new Error('TransactionAbstract is an abstract class and could not be instantiated directly');
        }
    }
}

module.exports = TransactionAbstract;