class StrategyHashAbstract {
    
    constructor() {
        
        this.strategy;

        if (new.target === StrategyHashAbstract) {
            throw new Error('StrategyHashAbstract is an abstract class and could not be instantiated directly');
        }
    }

    generateHash(data) {
        return this.strategy.hex(data);
    }
}

module.exports = StrategyHashAbstract;