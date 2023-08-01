const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

class Block{
    constructor(hashString,prevBlockhash,hashMethod){
        this.id= uuidv4();
        this.timestamp=null; 
        this.hash=crypto.createHash(hashMethod).update(hashString).digest('hex');
        this.prevBlockhash=prevBlockhash;
        this.hashMethod=hashMethod;  
        
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

    changeHashMethod(hashMethod){
        this.hashMethod=hashMethod;

    }

    generateHash(hashString){
        this.hash=crypto.createHash(this.hashMethod).update(hashString).digest('hex');

    }

   
}

module.exports = Block;