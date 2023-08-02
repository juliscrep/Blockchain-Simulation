const Hashes = require('jshashes');
const StrategyHashAbstract = require('./StrategyHashAbstract');

class StrategyMD5 extends StrategyHashAbstract {
    constructor() {
        super();
        this.strategy = new Hashes.MD5;
    }

    hash(data) {
        return super.hash(data);
    }
}

module.exports = StrategyMD5;