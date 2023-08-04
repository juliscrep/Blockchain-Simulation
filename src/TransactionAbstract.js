class TransactionAbstract{
    
    constructor(Block) {
        
        if (new.target === TransactionAbstract) {
            throw new Error('TransactionAbstract is an abstract class and could not be instantiated directly');
        }

        this.Block=Block;
    }

    getIdBlockAssociate(){
        return this.Block.getId();
    }
}

module.exports = TransactionAbstract;