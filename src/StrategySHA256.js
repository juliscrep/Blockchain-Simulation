const Hashes = require('jshashes');
const StrategyHashAbstract = require('./StrategyHashAbstract');

class StrategySHA256 extends StrategyHashAbstract {
    constructor() {
        super();
        this.strategy = new Hashes.SHA256;
    }

    generateHash(data) {
        return super.generateHash(data);
    }
}

module.exports = StrategySHA256;