const { v4: uuidv4 } = require('uuid');

class Node{
    
    constructor(){
        this.id= uuidv4();
        this.blockchain=[];
        this.nodesConnected=[];
    }

    getId(){
        return this.id;
    }

    getLastBlock(){
        return this.blockchain[this.blockchain.length - 1]
    }
    
    addNodeAssociate(node){ 
        this.nodesConnected(node);
    }

    addBlockAssociate(block){ 
        this.blockchain.push(block);
    }

    updateBlockinNodesConnected(block){
        for (n of nodesConnected){
            n.addBlockAssociate(block);
        }
    }

    getBlockChain(){
        let bchain="";
        for (b of blockchain){
            bchain += b.getBlockInformation();
        }
        return bchain;
    }

}

module.exports = Node;