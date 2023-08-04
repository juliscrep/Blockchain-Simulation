const Holder = require('./../src/Holder');
let Token = require('./../src/Token.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let CoinBase = require('./../src/CoinBase.js');


let holderObjectTest1;
let tokenObjectTest1;
let tokenObjectTest2;
let hasherSHA256ObjectTest1;
let transactionObjectTest1;

beforeEach(() => {

  holderObjectTest1 = new Holder("Ana","anaLopez@gmail.com","Passw127");
  tokenObjectTest1 = new Token();
  tokenObjectTest2 = new Token();
  hasherSHA256ObjectTest1 = new StrategySHA256();
  transactionObjectTest1 = new CoinBase(tokenObjectTest1, holderObjectTest1, hasherSHA256ObjectTest1);
  transactionObjectTest2 = new CoinBase(tokenObjectTest2, holderObjectTest1, hasherSHA256ObjectTest1);

});

describe('tests de clase holder', () => {

  test('Pruebas de obtener el atributo Digital Address', () => {
    expect(holderObjectTest1.getDigitalAddress()).not.toBeNull();      
    expect(holderObjectTest1.getDigitalAddress()).not.toEqual('');
    expect(holderObjectTest1.getDigitalAddress()).toHaveLength(38);
    expect(holderObjectTest1.getDigitalAddress()).toMatch('A');
  });

  test('Pruebas de obtener los los atributos name y email', () => {
    expect(holderObjectTest1.getProfileInformation()).not.toBeNull();      
    expect(holderObjectTest1.getProfileInformation()).not.toEqual('');
    expect(holderObjectTest1.getProfileInformation().length).toBeGreaterThanOrEqual(30);
  });

  test('Adherir una transaccion al holder', () => {
    expect(holderObjectTest1.addTransactionstoHolder(transactionObjectTest1));      
  });

  test('Obtener lista de transacciones del holder', () => {
    expect(holderObjectTest1.addTransactionstoHolder(transactionObjectTest1));      
    expect(holderObjectTest1.addTransactionstoHolder(transactionObjectTest2));      
    expect(holderObjectTest1.getHolderTransactions()).not.toEqual('');      
    expect(holderObjectTest1.getHolderTransactions().length).toBeGreaterThan(7);;    
  });

  
});
