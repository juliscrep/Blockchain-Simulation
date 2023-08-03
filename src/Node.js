const { v4: uuidv4 } = require('uuid');

class Node{
    
    constructor(){
        this.id= uuidv4();
        this.blockchain=[];
    }

    getId(){
        return this.id;
    }

    getLastBlock(){
        return this.blockchain[this.blockchain.length - 1]
    }

    addBlock(block){ 
        this.blockchain.push(block);
    }

}

module.exports = Node;