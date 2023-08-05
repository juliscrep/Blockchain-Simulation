let Holder = require('./../src/Holder.js');
let Token = require('./../src/Token.js');
let Node = require('./../src/Node.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let StrategyMD5 = require('./../src/StrategyMD5.js');
let CoinBase = require('./../src/CoinBase.js');
let Block = require('./../src/Block.js');

let holderObjectTest1;
let holderObjectTest2;

let tokenObjectTest1;
let tokenObjectTest2;

let nodeObjectTest1;

let hasherSHA256ObjectTest1;
let hasherMD5ObjectTest1;

let transactionObjectTest1;
let transactionObjectTest2;

let blockObjectTest1;
let blockObjectTest2;
let blockObjectTest3;


beforeEach(() => {
    
    holderObjectTest1 = new Holder("Juan","juanPerez@gmail.com","Pass123");
    holderObjectTest2 = new Holder("Ana","anaLopez@gmail.com","Passw127");

    tokenObjectTest1 = new Token();
    tokenObjectTest2 = new Token();

    nodeObjectTest1 = new Node();
    nodeObjectTest2 = new Node();
  
    hasherSHA256ObjectTest1 = new StrategySHA256();
    hasherMD5ObjectTest1 = new StrategyMD5()

    transactionObjectTest1 = new CoinBase(tokenObjectTest1, holderObjectTest1, hasherSHA256ObjectTest1);
    transactionObjectTest2 = new CoinBase(tokenObjectTest2, holderObjectTest2, hasherSHA256ObjectTest1);

    blockObjectTest1 = new Block(hasherSHA256ObjectTest1, nodeObjectTest1);
    blockObjectTest2 = new Block(hasherSHA256ObjectTest1, nodeObjectTest1, blockObjectTest1);
    blockObjectTest3 = new Block(hasherSHA256ObjectTest1, nodeObjectTest1, blockObjectTest2);
    blockObjectTest4 = new Block(hasherSHA256ObjectTest1);

});

describe('Tests de clase block', () => {

    test('Creacion de bloque 1 de ejemplo exitosa', () => {
        expect(blockObjectTest1.getId()).not.toBeNull();      
        expect(blockObjectTest1.getId()).not.toEqual('');
        expect(blockObjectTest1.getId().length).toBeGreaterThan(7);
        expect(blockObjectTest1.getId()).toHaveLength(36)
    });
    
    test('Creacion de bloque 2 de ejemplo exitosa', () => {
        expect(blockObjectTest2.getId()).not.toBeNull();      
        expect(blockObjectTest2.getId()).not.toEqual('');
        expect(blockObjectTest2.getId().length).toBeGreaterThan(7);
        expect(blockObjectTest2.getId()).toHaveLength(36);
    });

    test('Creacion de bloque 3 de ejemplo exitosa', () => {
        expect(blockObjectTest3.getId()).not.toBeNull();      
        expect(blockObjectTest3.getId()).not.toEqual('');
        expect(blockObjectTest3.getId().length).toBeGreaterThan(7);
        expect(blockObjectTest3.getId()).toHaveLength(36);
    });

    test('Creacion de bloque 4 de ejemplo exitosa', () => {
        expect(blockObjectTest4.getId()).not.toBeNull();      
        expect(blockObjectTest4.getId()).not.toEqual('');
        expect(blockObjectTest4.getId().length).toBeGreaterThan(7);
        expect(blockObjectTest4.getId()).toHaveLength(36);
    });

    test('Obtencion de metodo de hash en todos los bloques', () => {
        expect(blockObjectTest1.getHashMethod()).toBeInstanceOf(StrategySHA256);      
        expect(blockObjectTest2.getHashMethod()).toBeInstanceOf(StrategySHA256);      
        expect(blockObjectTest3.getHashMethod()).toBeInstanceOf(StrategySHA256);      
    });

    test('Cambiar Metodo de hash en bloque 1', () => {       
        expect(blockObjectTest3.changeHashMethod(hasherMD5ObjectTest1));    
        expect(blockObjectTest3.getHashMethod()).toBeInstanceOf(StrategyMD5);      
    });

    test('Añadir transacciones a bloque 1', () => {       
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));    
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest2));    
        expect(blockObjectTest1.getTransactionQuantity()).toBe(2);        
    });
    
    test('Ejecutar generación de hash en bloque 1', () => {
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));
        expect(blockObjectTest1.generateBlockHash());   
        expect(blockObjectTest1.getHash()).not.toBeNull();   
        expect(blockObjectTest1.getHash().length).toBeGreaterThan(7);    
    });

    test('Ejecutar cierre de bloque en bloque 1', () => {       
        expect(blockObjectTest1.closeBlock());    
        expect(blockObjectTest1.getTimestamp()).not.toBeNull();        
        expect(blockObjectTest1.getHash()).not.toBeNull();        
        expect(blockObjectTest1.getHash().length).toBeGreaterThan(7);   
    });
    
    test('Cambiar de nodo asociado en bloque 1', () => {
        expect(blockObjectTest1.setNodeAssociate(nodeObjectTest2));  
        expect(blockObjectTest1.getNodeAssociate()).toBeInstanceOf(Node); 
        expect(blockObjectTest1.getNodeAssociate()).not.toEqual(nodeObjectTest1);   
        expect(blockObjectTest1.broadcast());    
    });

    test('Obtener cierre de bloque 1 de forma organica', () => {
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));    
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.getTimestamp()).not.toBeNull();        
        expect(blockObjectTest1.getHash()).not.toBeNull();        
        expect(blockObjectTest1.getHash().length).toBeGreaterThan(7);   
    });

    test('Intentar añadir mas de 10 transacciones a bloque 1', () => {
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));    
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));  
        expect(() => blockObjectTest1.addTransactiontoBlock(transactionObjectTest1)).toThrow('Las transacciones han llegado al limite establecido en este bloque');
    });

    test('Obtencion de hash del bloque previo en todos los bloques', () => {
        expect(blockObjectTest1.closeBlock());    
        expect(blockObjectTest1.getPrevBlockHash()).toBeNull();    
        expect(blockObjectTest2.getPrevBlockHash()).not.toBeNull();  
        expect(blockObjectTest2.getPrevBlockHash().length).toBeGreaterThan(7); 
        expect(blockObjectTest2.closeBlock());     
        expect(blockObjectTest3.getPrevBlockHash()).not.toBeNull();   
        expect(blockObjectTest3.getPrevBlockHash().length).toBeGreaterThan(7);     
    });

    test('Obtencion de nodo asociado a cada bloque', () => {
        expect(blockObjectTest1.getNodeAssociate()).toBeInstanceOf(Node);   
        expect(blockObjectTest2.getNodeAssociate()).toBeInstanceOf(Node);   
        expect(blockObjectTest3.getNodeAssociate()).toBeInstanceOf(Node);       
    });

    test('Obtener información de todos los bloques', () => {
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest1));    
        expect(blockObjectTest1.addTransactiontoBlock(transactionObjectTest2));    
        expect(blockObjectTest1.getBlockInformation().length).toBeGreaterThan(7);   
        expect(blockObjectTest2.getBlockInformation().length).toBeGreaterThan(7);   
        expect(blockObjectTest3.getBlockInformation().length).toBeGreaterThan(7);   
    });

});

