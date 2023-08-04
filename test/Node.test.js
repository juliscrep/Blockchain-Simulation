const Node = require('./../src/Node.js');
let StrategySHA256 = require('./../src/StrategySHA256.js');
let Block = require('./../src/Block.js');

let nodeObjectTest1;
let nodeObjectTest2;
let blockObjectTest1;
let hasherSHA256ObjectTest1;

beforeEach(() => {
  nodeObjectTest1 = new Node();
  nodeObjectTest2 = new Node();
  hasherSHA256ObjectTest1 = new StrategySHA256();
  blockObjectTest1 = new Block(hasherSHA256ObjectTest1, nodeObjectTest1);
});

describe('Tests de clase node', () => {

    test('Creacion de nodo 1 de ejemplo exitosa', () => {
        expect(nodeObjectTest1.getId()).not.toBeNull();      
        expect(nodeObjectTest1.getId()).not.toEqual('');
        expect(nodeObjectTest1.getId().length).toBeGreaterThan(7);
        expect(nodeObjectTest1.getId()).toHaveLength(36)
    });
    
    test('Creacion de nodo 2 de ejemplo exitosa', () => {
        expect(nodeObjectTest2.getId()).not.toBeNull();      
        expect(nodeObjectTest2.getId()).not.toEqual('');
        expect(nodeObjectTest2.getId().length).toBeGreaterThan(7);
        expect(nodeObjectTest2.getId()).toHaveLength(36);
    });
    
    test('Asociar nodo 1 con nodo 2', () => {
        expect(nodeObjectTest1.addNodeAssociate(nodeObjectTest2)); 
        expect((nodeObjectTest1.getNodesAssociate().length)).not.toBe(0);
    });

    describe('Metodos aplicados en broadcast', () => {

        test('Asociar bloque a nodo 1', () => {
            expect(nodeObjectTest1.addBlockAssociate(blockObjectTest1)); 
            expect((nodeObjectTest1.getLastBlock().length)).not.toBe(0);
        });

        test('Replicar cambios a nodos vecinos', () => {
            expect(nodeObjectTest1.addNodeAssociate(nodeObjectTest2)); 
            expect(nodeObjectTest1.updateBlockinNodesConnected(blockObjectTest1)); 
            expect(nodeObjectTest2.getLastBlock()).toBeInstanceOf(Block);
        });

        test('Obtener Datos de la blockchain almacenada en nodo', () => {
            expect(nodeObjectTest1.addBlockAssociate(blockObjectTest1)); 
            expect(nodeObjectTest1.getBlockChainData().length).toBeGreaterThan(10); 
        });

    });

});
