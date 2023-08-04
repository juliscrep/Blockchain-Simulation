const { v4: uuidv4 } = require('uuid');

class Block{

    constructor(hashMethod, prevBlock = null, node){
        this.id= uuidv4();
        this.hash=null;
        this.timestamp=null; 
        this.hasher = hashMethod;
        this.prevBlockhash= prevBlock ? prevBlock.getHash() : null;
        this.nodeAssociate= node ? node : null;
        this.transactions=[];
    }
     
    getId(){
        return this.id;
    }

    getTimestamp(){
        return this.timestamp;
    }

    getHash(){
        return this.hash;
    }

    getHashMethod(){
       return this.hasher;
    }
    
    getPrevBlockHash(){
        return this.prevBlockhash;
    }
    
    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
    }

    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
    }

    setNodeAssociate(node){
        this.nodeAssociate=node;
    }

    generateBlockHash() {
        let transactionsHash;
        for (let t of transactions){
            transactionsHash+=generateHash(t);
        }

        this.hash = generateHash(this.timestamp + this.prevBlockhash + transactionsHash);
    }

    getBlockInformation(){
        let taux="";
        for (t of this.transactions){
            taux+=t.getIdentifier() + "\n";
        }
        bchain += "Block: " + this.getId() + "\n" + "timestamp: " + this.getTimestamp() + "\n" + "Transactions" + "\n\n" + taux + "\n" + "hash: " + this.getHash() + "\n" + "prev: " + this.getPrevBlockHash() + "\n\n\n";
    }

    closeBlock(){
        try{
             this.timestamp=new Date().getTime/1000;
             this.generateBlockHash();
             this.broadcast();
        }
        catch{
            throw new Error('Error al intentar cerrar el bloque');
        }               
    }

    addTransactiontoBlock(transaction){
        if (this.transactions.length==10){
            if (this.timestamp==null){
                this.closeBlock();
                return 'Block close';
            }
            else{
                throw new Error('Las transacciones han llegado al limite establecido en este bloque');
            }
        }
        this.transactions.push(transaction);
    }

    transactionQuantity(){
        let counter = this.transactions.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return counter;
    }

    broadcast(){
        this.nodeAssociate.addBlockAssociate(this.Block);
        this.addNodeAssociate.addBlockAssociate(this.Block);
    }
   
}

module.exports = Block;