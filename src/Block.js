const { v4: uuidv4 } = require('uuid');

class Block{
    constructor(timestamp,prevBlockhash,transactions, hashMethod){
        this.id= uuidv4();
        this.timestamp=timestamp; 
        this.transactions=transactions; //es un arreglo de transacciones
        this.prevBlockhash=prevBlockhash;
        this.hasher = hashMethod;
    }

    generateHash() {
        let hashString = this.timestamp + this.transactions + this.prevBlockhash;
        this.hash = this.hasher.hash(hashString);
    }

    changeHashMethod(hashMethod) {
        this.hasher = hashMethod;
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
       return this.hashMethod;
    }
    
    getPrevBlockHash(){
        return this.prevBlockhash;
    }

    transactionQuantity(){
        
    }

    closeBlock(){

        this.generateHash();
        
        try{
             this.timestamp=new Date().getTime/1000;
             return true;
        }
        catch{
            return false;
        }        
        
        
    }

    broadcast(){

    }

   
}

module.exports = Block;