const Hashes = require('jshashes');
const StrategyHashAbstract = require('./StrategyHashAbstract');

class StrategyMD5 extends StrategyHashAbstract {
    constructor() {
        super();
        this.strategy = new Hashes.MD5;
    }

    generateHash(data) {
        return super.hash(data);
    }
}

module.exports = StrategyMD5;