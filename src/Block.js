const { v4: uuidv4 } = require('uuid');

class Block{
    constructor(prevBlockhash, hashMethod){
        this.id= uuidv4();
        this.timestamp=null; 
        this.prevBlockhash=prevBlockhash;
        this.hasher = hashMethod;
        this.transactions=[];
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

    addTransactiontoBlock(transaction){
        if (this.transactions.length==10){
            throw new Error('Transactions limit has reach in this Block');
        }
        this.transactions.push(transaction);
    }

    transactionQuantity(){
        let counter = this.transactions.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if (counter==10){
            this.closeBlock();
        }
    }

    closeBlock(){
        try{
             this.timestamp=new Date().getTime/1000;
             this.generateHash();
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