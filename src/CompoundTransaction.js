const TransactionAbstract = require('./TransactionAbstract');

class CompoundTransaction extends TransactionAbstract{
    constructor(){
        this.level = 0;
        this.transactions=[];
    }

    addTransaction(transaction){ // arreglo de 3 transacciones 
    
        //si las transacciones son compuestas van a tener a su vez 3 transacciones mas 
       
        if(this.level==0) //seria el primer nivel 
        {
             //se deberia chequear que sea transaccion simple o coinbase para agregarse 

        }
    
    }

    getTransaction(){

    }


}

module.exports = CompoundTransaction;