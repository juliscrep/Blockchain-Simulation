const { v4: uuidv4 } = require('uuid');

class Node{
    
    constructor(){
        this.identifier = uuidv4();
        this.blockchain=[];
        this.nodesConnected=[];
    }

    getId(){
        return this.identifier;
    }

    getLastBlock(){
        return this.blockchain[this.blockchain.length - 1]
    }
    
    addNodeAssociate(node){ 
        this.nodesConnected.push(node);
    }

    getNodesAssociate(){
        return this.nodesConnected;
    }

    addBlockAssociate(block){ 
        this.blockchain.push(block);
    }

    updateBlockinNodesConnected(block){
        if (this.nodesConnected.length>0){
            for (let nodeObject of this.nodesConnected){
                nodeObject.addBlockAssociate(block);
            }
        }
    }

    getBlockChainData(){
        let bchain="";
        for (let blockObject of this.blockchain){
            bchain += blockObject.getBlockInformation();
        }
        return bchain;
    }

}

module.exports = Node;