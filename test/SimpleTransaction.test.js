let Holder = require('./../src/Holder.js');
let Token = require('./../src/Token.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let StrategyMD5 = require('./../src/StrategyMD5.js');
let CoinBase = require('./../src/CoinBase.js');
let SimpleTransaction = require('./../src/SimpleTransaction.js');

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
});

describe('tests de clase SimpleTransaction', () => {

  test('creacion de clase SimpleTransaction', () => {
    expect(transactionObjectTest1).toBeInstanceOf(SimpleTransaction);
    expect(transactionObjectTest1.holder).toEqual(holderObjectTest1);
    expect(transactionObjectTest1.hasher).toEqual(hasherSHA256ObjectTest1);
    expect(transactionObjectTest1.in).toEqual(coinbaseObjectTest1.getIdentifier());
    expect(transactionObjectTest1.out).toEqual(holderObjectTest1.getDigitalAddress());

    let hashString = transactionObjectTest1.getIdentifier() + transactionObjectTest1.in + transactionObjectTest1.out;
    expect(transactionObjectTest1.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));

    expect(transactionObjectTest2).toBeInstanceOf(SimpleTransaction);
    expect(transactionObjectTest2.holder).toEqual(holderObjectTest2);
    expect(transactionObjectTest2.hasher).toEqual(hasherMD5ObjectTest1);
    expect(transactionObjectTest2.in).toEqual(coinbaseObjectTest2.getIdentifier());
    expect(transactionObjectTest2.out).toEqual(holderObjectTest2.getDigitalAddress());

    hashString = transactionObjectTest2.getIdentifier() + transactionObjectTest2.in + transactionObjectTest2.out;
    expect(transactionObjectTest2.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));

    expect(transactionObjectTest3).toBeInstanceOf(SimpleTransaction);
    expect(transactionObjectTest3.holder).toEqual(holderObjectTest1);
    expect(transactionObjectTest3.hasher).toEqual(hasherSHA256ObjectTest1);
    expect(transactionObjectTest3.in).toEqual(transactionObjectTest2.getIdentifier());
    expect(transactionObjectTest3.out).toEqual(holderObjectTest1.getDigitalAddress());

    hashString = transactionObjectTest3.getIdentifier() + transactionObjectTest3.in + transactionObjectTest3.out;
    expect(transactionObjectTest3.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));

    expect(transactionObjectTest4).toBeInstanceOf(SimpleTransaction);
    expect(transactionObjectTest4.holder).toEqual(holderObjectTest2);
    expect(transactionObjectTest4.hasher).toEqual(hasherMD5ObjectTest1);
    expect(transactionObjectTest4.in).toEqual(transactionObjectTest1.getIdentifier());
    expect(transactionObjectTest4.out).toEqual(holderObjectTest2.getDigitalAddress());

    hashString = transactionObjectTest4.getIdentifier() + transactionObjectTest4.in + transactionObjectTest4.out;
    expect(transactionObjectTest4.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));
  });

  test('modificación método de hash de SimpleTransaction', () => {
    transactionObjectTest1.changeHashMethod(hasherMD5ObjectTest1);

    let hashString = transactionObjectTest1.getIdentifier() + transactionObjectTest1.in + transactionObjectTest1.out;
    expect(transactionObjectTest1.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));

    transactionObjectTest2.changeHashMethod(hasherSHA256ObjectTest1);

    hashString = transactionObjectTest2.getIdentifier() + transactionObjectTest2.in + transactionObjectTest2.out;
    expect(transactionObjectTest2.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));

    transactionObjectTest3.changeHashMethod(hasherMD5ObjectTest1);

    hashString = transactionObjectTest3.getIdentifier() + transactionObjectTest3.in + transactionObjectTest3.out;
    expect(transactionObjectTest3.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));

    transactionObjectTest4.changeHashMethod(hasherSHA256ObjectTest1);

    hashString = transactionObjectTest4.getIdentifier() + transactionObjectTest4.in + transactionObjectTest4.out;
    expect(transactionObjectTest4.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));
  });
  
});
