const TransactionAbstract = require('./../src/TransactionAbstract.js');

beforeEach(() => {
});

describe('Tests de clase TransactionAbstract', () => {

  test('No se permite instanciar una clase abstracta de forma directa', () => {
    expect(() => new TransactionAbstract()).toThrow(/TransactionAbstract is an abstract class/);
  });
  
});
