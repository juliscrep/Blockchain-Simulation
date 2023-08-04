const { v4: uuidv4 } = require('uuid');

class Block{

    constructor(hashMethod, node= null, prevBlock = null){
        this.id= uuidv4();
        this.hash=null;
        this.timestamp=null; 
        this.hasher = hashMethod;
        this.nodeAssociate= node ? node : null;
        this.prevBlockhash= prevBlock ? prevBlock.getHash() : null;
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

    getNodeAssociate(){
        return this.nodeAssociate;
    }

    setNodeAssociate(node){
        this.nodeAssociate=node;
    }

    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
    }

    generateBlockHash() {
        let transactionsHash="";
        
        for (let transactionObject of this.transactions){
            transactionsHash += this.hasher.generateHash(transactionObject.getIdentifier());
        }

        let pbAux = this.prevBlockhash? this.prevBlockhash : "";
        this.hash = this.hasher.generateHash(this.timestamp + pbAux + transactionsHash);
    }

    getBlockInformation(){
        let taux="";
        for (let transactionObject of this.transactions){
            taux+=transactionObject.getIdentifier() + "\n";
        }
        let bchain = "-------------------------------------"  + "\n\n";
        bchain += "Block: " + this.getId() + "\n" + "timestamp: " + this.getTimestamp() + "\n\n" + "Transactions" + "\n\n" + taux + "\n" + "hash: " + this.getHash() + "\n" + "prev: " + this.getPrevBlockHash() + "\n\n";
        bchain += "-------------------------------------"  + "\n\n";
        return bchain;
    }
    
    broadcast(){
        this.nodeAssociate.addBlockAssociate(this);
        this.nodeAssociate.updateBlockinNodesConnected(this);
    }

    closeBlock(){
        try{
             this.timestamp= Math.floor(Date.now() / 1000);
             this.generateBlockHash();
             this.broadcast();
        }
        catch{
            throw new Error('Error al intentar cerrar el bloque');
        }               
    }

    addTransactiontoBlock(transaction){

        if (this.transactions.length==10){
            throw new Error('Las transacciones han llegado al limite establecido en este bloque');
        }

        this.transactions.push(transaction);

        if (this.transactions.length==10){
                this.closeBlock();
                return 'Block close';
        }
    }

    getTransactionQuantity(){
        return this.transactions.length;
    }

   
}

module.exports = Block;