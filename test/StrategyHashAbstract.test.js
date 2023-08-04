const StrategyHashAbstract = require('./../src/StrategyHashAbstract.js');

beforeEach(() => {
});

describe('Tests de clase StrategyHashAbstract', () => {

  test('No se permite instanciar una clase abstracta de forma directa', () => {
    expect(() => new StrategyHashAbstract()).toThrow("StrategyHashAbstract is an abstract class and could not be instantiated directly");
  });
    
});
