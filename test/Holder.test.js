const Holder = require('./../src/Holder');

beforeEach(() => {
  holderObjectTest1 = new Holder("Ana","anaLopez@gmail.com","Passw127");

});

describe('tests de clase holder', () => {

  test('Pruebas al atributo Digital Address', () => {
    expect(holderObjectTest1.getDigitalAddress()).not.toBeNull();      
    expect(holderObjectTest1.getDigitalAddress()).not.toEqual('');
    expect(holderObjectTest1.getDigitalAddress()).toHaveLength(38);
    expect(holderObjectTest1.getDigitalAddress()).toMatch('A');
  });

  test('Pruebas a los atributos name y email', () => {
    expect(holderObjectTest1.getProfileInformation()).not.toBeNull();      
    expect(holderObjectTest1.getProfileInformation()).not.toEqual('');
    expect(holderObjectTest1.getProfileInformation().length).toBeGreaterThanOrEqual(30);
  
  });

  
});
