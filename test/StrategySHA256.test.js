const Hashes = require('jshashes');
const StrategySHA256 = require('../src/StrategySHA256');
const crypto = require('crypto');

let hasher;

beforeEach(() => {
  hasher = new StrategySHA256();
  SHA256 = new Hashes.SHA256();
});

describe('tests de clases StrategySHA256', () => {

  test('creacion de clase StrategySHA256', () => {
    expect(hasher.strategy).not.toBeNull();      
    expect(hasher.strategy).toBeInstanceOf(Hashes.SHA256);
  });

  test('generación de hash con StrategySHA256', () => {
    randomDataLength = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    randomData = crypto.randomBytes(Math.ceil(randomDataLength / 2)).toString('hex').slice(0, randomDataLength); 
    expect(hasher.generateHash(randomData)).toEqual(SHA256.hex(randomData));
  });
  
});
