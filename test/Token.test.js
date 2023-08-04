const Token = require('./../src/Token.js');

let tokenObjectTest1;
let tokenObjectTest2;

beforeEach(() => {
  tokenObjectTest1 = new Token();
  tokenObjectTest2 = new Token();
});

describe('Tests de clase token', () => {

  test('Creacion de token 1 de ejemplo exitosa', () => {
    expect(tokenObjectTest1.getIdentifier()).not.toBeNull();      
    expect(tokenObjectTest1.getIdentifier()).not.toEqual('');
    expect(tokenObjectTest1.getIdentifier().length).toBeGreaterThan(7);
    expect(tokenObjectTest1.getIdentifier()).toHaveLength(40);
    expect(tokenObjectTest1.getIdentifier()).toMatch('TKN');
  });

  test('Creacion de token 2 de ejemplo exitosa', () => {
    expect(tokenObjectTest2.getIdentifier()).not.toBeNull();      
    expect(tokenObjectTest2.getIdentifier()).not.toEqual('');
    expect(tokenObjectTest2.getIdentifier().length).toBeGreaterThan(7);
    expect(tokenObjectTest2.getIdentifier()).toHaveLength(40);
    expect(tokenObjectTest2.getIdentifier()).toMatch('TKN');
  });
  
});
