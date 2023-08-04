const Hashes = require('jshashes');
const StrategyMD5 = require('../src/StrategyMD5.js');
const crypto = require('crypto');

let hasher;

beforeEach(() => {
  hasher = new StrategyMD5();
  MD5 = new Hashes.MD5();
});

describe('tests de clases StrategyMD5', () => {

  test('creacion de clase StrategyMD5', () => {
    expect(hasher.strategy).not.toBeNull();      
    expect(hasher.strategy).toBeInstanceOf(Hashes.MD5);
  });

  test('generación de hash con StrategyMD5', () => {
    randomDataLength = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    randomData = crypto.randomBytes(Math.ceil(randomDataLength / 2)).toString('hex').slice(0, randomDataLength); 
    expect(hasher.generateHash(randomData)).toEqual(MD5.hex(randomData));
  });
  
});
