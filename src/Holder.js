const { v4: uuidv4 } = require('uuid');

class Holder{

    constructor(name,email,password){
        this.identifier = uuidv4();
        this.name=name;
        this.email=email;
        this.password=password;
        this.digitalAddress='A-'+uuidv4();
        this.transactions = [];
    }

    getDigitalAddress(){
        return this.digitalAddress;
    }

    getHolderTransactions(){
        let transactionsList="List of transactions: ";
        
        for (let t of this.transactions){
            transactionsList+=t.getIdentifier() + " - ";
        }

        return transactionsList;
    }
    
    addTransactionstoHolder(transaction){
        this.transactions.push(transaction);
    }
    
    getProfileInformation(){
        return "Holder name:" + this.name + " - Holder email: " + this.email;
    }
    
}

module.exports = Holder;