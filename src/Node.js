const { v4: uuidv4 } = require('uuid');
const Block= require('./Block');

class Node{
    constructor(){
        this.id= uuidv4();
        this.blockchain=[this.generateFirstBlock()];
    }

    getId(){
        return this.id;
    }

    generateFirstBlock(){
        return new Block();
    }

    getLastBlock(){
        return this.blockchain[this.blockchain.length - 1]
    }

    addBlock(block){ 
        this.blockchain.push(block);

    }

}

module.exports = Node;