const { v4: uuidv4 } = require('uuid');

class Block{

    constructor(hashMethod, node=null, prevBlock=null){
<<<<<<< HEAD
        this.id= uuidv4();
=======
        this.identifier= uuidv4();
        this.hash=null;
>>>>>>> 5e4ea3d0d4b839043a74f71113348b818e10f66c
        this.timestamp=null; 
        this.hasher = hashMethod;
        this.hash=null;
        this.nodeAssociate= node? node : null;
        this.prevBlock= prevBlock? prevBlock : null;
        this.transactions=[];
    }
     
    getId(){
        return this.identifier;
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
        return this.prevBlock? this.prevBlock.getHash() : null
    }
    
    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
    }

    getNodeAssociate(){
        return this.nodeAssociate;
    }

    setNodeAssociate(node){
        this.nodeAssociate=node;
    }

    generateBlockHash() {
        let transactionsHash="";
        
        for (let transactionObject of this.transactions){
            transactionsHash += this.hasher.generateHash(transactionObject.getIdentifier());
        }

        let pbAux = this.prevBlock? this.prevBlock.getHash() : "";
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
                return 'Transaccion agregada a bloque. Bloque cerrado';
        }

        return 'Transaccion agregada a bloque';
    }

    getTransactionQuantity(){
        return this.transactions.length;
    }

   
}

module.exports = Block;