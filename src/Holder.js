const { v4: uuidv4 } = require('uuid');

class Holder{
    constructor(name,email,password){
        this.id = uuidv4();
        this.name=name;
        this.email=email;
        this.password=password;
        this.digitalAddress='A-'+uuidv4();
    }
    getProfileInformation(){
        return "Holder name:" + this.name + " - Holder email: " + this.email;
    }
    getDigitalAddress(){
        return this.digitalAddress;
    }
}

module.exports = Holder;