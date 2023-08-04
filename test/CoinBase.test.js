const Hashes = require('jshashes');
const crypto = require('crypto');

let Holder = require('./../src/Holder.js');
let Token = require('./../src/Token.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let StrategyMD5 = require('./../src/StrategyMD5.js');
let CoinBase = require('./../src/CoinBase.js');

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

    coinbaseObjectTest1 = new CoinBase(tokenObjectTest1, holderObjectTest1, hasherSHA256ObjectTest1);
    coinbaseObjectTest2 = new CoinBase(tokenObjectTest2, holderObjectTest2, hasherMD5ObjectTest1);
});

describe('tests de clase CoinBase', () => {

  test('creacion de clase CoinBase', () => {
    expect(coinbaseObjectTest1).toBeInstanceOf(CoinBase);
    expect(coinbaseObjectTest1.token).toEqual(tokenObjectTest1);
    expect(coinbaseObjectTest1.tkn).toEqual(tokenObjectTest1.getIdentifier());
    expect(coinbaseObjectTest1.out).toEqual(holderObjectTest1.getDigitalAddress());
    expect(coinbaseObjectTest1.holder).toEqual(holderObjectTest1);
    expect(coinbaseObjectTest1.hasher).toEqual(hasherSHA256ObjectTest1);

    let hashString = coinbaseObjectTest1.getIdentifier() + coinbaseObjectTest1.tkn + coinbaseObjectTest1.out;
    expect(coinbaseObjectTest1.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));

    expect(coinbaseObjectTest2).toBeInstanceOf(CoinBase);
    expect(coinbaseObjectTest2.token).toEqual(tokenObjectTest2);
    expect(coinbaseObjectTest2.tkn).toEqual(tokenObjectTest2.getIdentifier());
    expect(coinbaseObjectTest2.out).toEqual(holderObjectTest2.getDigitalAddress());
    expect(coinbaseObjectTest2.holder).toEqual(holderObjectTest2);
    expect(coinbaseObjectTest2.hasher).toEqual(hasherMD5ObjectTest1);

    hashString = coinbaseObjectTest2.getIdentifier() + coinbaseObjectTest2.tkn + coinbaseObjectTest2.out;
    expect(coinbaseObjectTest2.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));
  });

  test('modificación método de hash de CoinBase', () => {
    coinbaseObjectTest1.changeHashMethod(hasherMD5ObjectTest1);

    let hashString = coinbaseObjectTest1.getIdentifier() + coinbaseObjectTest1.tkn + coinbaseObjectTest1.out;
    expect(coinbaseObjectTest1.hash).toEqual(hasherMD5ObjectTest1.generateHash(hashString));

    coinbaseObjectTest2.changeHashMethod(hasherSHA256ObjectTest1);

    hashString = coinbaseObjectTest2.getIdentifier() + coinbaseObjectTest2.tkn + coinbaseObjectTest2.out;
    expect(coinbaseObjectTest2.hash).toEqual(hasherSHA256ObjectTest1.generateHash(hashString));
  });
  
});
