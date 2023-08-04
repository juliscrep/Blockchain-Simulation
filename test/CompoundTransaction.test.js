let Holder = require('./../src/Holder.js');
let Token = require('./../src/Token.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let StrategyMD5 = require('./../src/StrategyMD5.js');
let CoinBase = require('./../src/CoinBase.js');
let SimpleTransaction = require('./../src/SimpleTransaction.js');
let CompoundTransaction = require('../src/CompoundTransaction.js');

let holderObjectTest1;
let holderObjectTest2;

let tokenObjectTest1;
let tokenObjectTest2;

let hasherSHA256ObjectTest1;
let hasherMD5ObjectTest1;

beforeEach(() => {
    holderObjectTest1 = new Holder("Juan","juanPerez@gmail.com","Pass123");
    holderObjectTest2 = new Holder("Ana","anaLopez@gmail.com","Passw127");

    tokenObjectTest1 = new Token();
    tokenObjectTest2 = new Token();

    hasherSHA256ObjectTest1 = new StrategySHA256();
    hasherMD5ObjectTest1 = new StrategyMD5();

    coinbaseObjectTest1 = new CoinBase(tokenObjectTest1, holderObjectTest2, hasherSHA256ObjectTest1);
    coinbaseObjectTest2 = new CoinBase(tokenObjectTest2, holderObjectTest1, hasherMD5ObjectTest1);

    transactionObjectTest1  = new SimpleTransaction(coinbaseObjectTest1,holderObjectTest1,hasherSHA256ObjectTest1);
    transactionObjectTest2  = new SimpleTransaction(coinbaseObjectTest2,holderObjectTest2,hasherMD5ObjectTest1);
    transactionObjectTest3  = new SimpleTransaction(transactionObjectTest2,holderObjectTest1,hasherSHA256ObjectTest1);
    transactionObjectTest4  = new SimpleTransaction(transactionObjectTest1,holderObjectTest2,hasherMD5ObjectTest1);    

    compoundTransaction1 = new CompoundTransaction();
});

describe('tests de clase CompoundTransaction', () => {

  test('creacion de clase CompoundTransaction', () => {
    expect(compoundTransaction1).toBeInstanceOf(CompoundTransaction);
    expect(compoundTransaction1.level).toEqual(0);
    expect(compoundTransaction1.transactions).toEqual([]);
  });

  test('modificación de nivel de clase CompoundTransaction', () => {
    let tmpCompoundTransaction = new CompoundTransaction();
    tmpCompoundTransaction.setLevel(1);
    expect(tmpCompoundTransaction.level).toEqual(1);
  });

  test("incorporación de árbol de transacciones compuestas modifica los niveles en CompoundTransaction", () => {
    let tmpCompoundTransaction1 = new CompoundTransaction();
    let tmpCompoundTransaction2 = new CompoundTransaction();

    tmpCompoundTransaction1.addTransaction(tmpCompoundTransaction2);

    expect(tmpCompoundTransaction1.level).toEqual(0);
    expect(tmpCompoundTransaction2.level).toEqual(1);
  });

  test("Espero un error al agregar más de 3 transacciones en CompoundTransaction", () => {
    expect(() => {
        compoundTransaction1.addTransaction(coinbaseObjectTest1);
        compoundTransaction1.addTransaction(transactionObjectTest1);
        compoundTransaction1.addTransaction(transactionObjectTest2);
        compoundTransaction1.addTransaction(transactionObjectTest3);
    }).toThrow("CompoundTransaction can only contain 3 transactions");
  });

  test("Espero un error al agregar un CompoundTransaction en un segundo nivel", () => {
    let tmpCompoundTransaction1 = new CompoundTransaction();
    let tmpCompoundTransaction2 = new CompoundTransaction();
    let tmpCompoundTransaction3 = new CompoundTransaction();

    expect(() => {
        tmpCompoundTransaction1.addTransaction(tmpCompoundTransaction2);
        tmpCompoundTransaction2.addTransaction(tmpCompoundTransaction3);
    }).toThrow("At this level you can only add CoinBase or Simple Transactions");
  });
});
