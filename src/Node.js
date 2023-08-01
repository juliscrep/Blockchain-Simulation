const { v4: uuidv4 } = require('uuid');

class Node{
    constructor(){
        this.id= uuidv4();
    }

    getId(){
        return this.id;
    }
}

module.exports = Node;