const Block = require('./Block');
const CoinBase = require('./CoinBase');
const Holder = require('./Holder');
const Node = require('./Node');
const SimpleTransaction = require('./SimpleTransaction');
const StrategyMD5 = require('./StrategyMD5');
const StrategySHA256 = require('./StrategySHA256');
const Token = require('./Token');

// Creación de datos

const holder1 = new Holder("Juan","juanPerez@gmail.com","Pass123");
const holder2 = new Holder("Ana","anaLopez@gmail.com","Passw127");
const holder3 = new Holder("Juana","carlosJuarez@gmail.com","Pasword127");
const holder4 = new Holder("Lautaro","l223@gmail.com","Pasword127");
const holder5 = new Holder("Pedro","pedro123@gmail.com","Pasword127");
const holder6 = new Holder("Jose","jj54@gmail.com","Pasword127");
const holder7 = new Holder("Flavia","ffl234@gmail.com","Pasword127");
const holder8 = new Holder("Florencia","flor1234@gmail.com","Pasword127");
const holder9 = new Holder("Macarena","maca201@gmail.com","Pasword127");
const holder10 = new Holder("Gustavo","gusprev53@gmail.com","Pasword127");
const holder11 = new Holder("Ruben","gusprev53@gmail.com","Pasword127");
const holder12 = new Holder("German","gg234@gmail.com","Pasword127");
const holder13 = new Holder("Cristian","crt234@gmail.com","Pasword127");
const holder14 = new Holder("Lucrecia","lucre1234@gmail.com","Pasword127");

const token1 = new Token();
const token2 = new Token();
const token3 = new Token();
const token4 = new Token();
const token5 = new Token();
const token6 = new Token();
const token7 = new Token();
const token8 = new Token();
const token9 = new Token();
const token10 = new Token();
const token11 = new Token();
const token12 = new Token();
const token13 = new Token();
const token14 = new Token();

const node1 = new Node();
const node2 = new Node();
const node3 = new Node();

const hasher1 = new StrategySHA256();
const hasher2 = new StrategyMD5()

const trans1 = new CoinBase(token1,holder1,hasher1);
const trans2 = new CoinBase(token2,holder2,hasher1);
const trans3 = new CoinBase(token3,holder3,hasher1);
const trans4 = new CoinBase(token4,holder4,hasher1);
const trans5 = new CoinBase(token5,holder5,hasher1);
const trans6 = new CoinBase(token6,holder6,hasher1);
const trans7 = new CoinBase(token7,holder7,hasher1);
const trans8 = new CoinBase(token8,holder8,hasher1);
const trans9 = new CoinBase(token9,holder9,hasher1);
const trans10 = new CoinBase(token10,holder10,hasher1);
const trans11 = new CoinBase(token11,holder11,hasher1);
const trans12 = new CoinBase(token12,holder12,hasher1);
const trans13 = new CoinBase(token13,holder13,hasher1);
const trans14 = new CoinBase(token14,holder14,hasher1);
const trans15 = new SimpleTransaction(trans1, holder2, hasher1);

const block1 = new Block(hasher1, node1);
const block2 = new Block(hasher1, node1, block1);
const block3 = new Block(hasher1, node1, block2);

// Implementaciones


try {
    
    node1.addNodeAssociate(node2);
    node1.addNodeAssociate(node3);

    block1.addTransactiontoBlock(trans1);
    block1.addTransactiontoBlock(trans2);
    block1.addTransactiontoBlock(trans3);
    block1.addTransactiontoBlock(trans4);
    block1.addTransactiontoBlock(trans5);
    block1.addTransactiontoBlock(trans6);
    block1.addTransactiontoBlock(trans7);
    block1.addTransactiontoBlock(trans8);
    block1.addTransactiontoBlock(trans9);
    block1.addTransactiontoBlock(trans10);
    block2.addTransactiontoBlock(trans11);
    block2.addTransactiontoBlock(trans12);
    block2.addTransactiontoBlock(trans13);
    block3.addTransactiontoBlock(trans14);
    block3.addTransactiontoBlock(trans15);   
    
    trans1.changeHashMethod(hasher2);
    block2.changeHashMethod(hasher2)
    
    const blockChainPlayground = node1.getBlockChainData();
    console.log(blockChainPlayground);
} 
catch (error) {
    console.log(error.message);
}