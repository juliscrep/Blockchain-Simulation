class StrategyHashAbstract {
    constructor() {
        if (new.target === StrategyHashAbstract) {
            throw new Error('StrategyHashAbstract is an abstract class and could not be instantiated directly');
        }
    }

    hash(data) {
        return this.strategy.hex(data);
    }
}

module.exports = StrategyHashAbstract;