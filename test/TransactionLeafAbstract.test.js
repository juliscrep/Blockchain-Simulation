const TransactionLeafAbstract = require('./../src/TransactionLeafAbstract.js');

beforeEach(() => {
});

describe('Tests de clase TransactionLeafAbstract', () => {

  test('No se permite instanciar una clase abstracta de forma directa', () => {
    expect(() => new TransactionLeafAbstract()).toThrow(/TransactionLeafAbstract is an abstract class and could not be instantiated directly/);
  });
  
});
