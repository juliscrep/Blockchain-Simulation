const Block = require('./Block');
const Holder = require('./Holder');
const Node = require('./Node');
const Token = require('./Token');
const StrategyHashAbstract = require('./StrategyHashAbstract');
const StrategyMD5 = require('./StrategyMD5');
const StrategySHA256 = require ('./StrategySHA256');
const SimpleTransaction = require ('./SimpleTransaction');
const CoinBase = require ('./CoinBase');

const token1 = new Token();
const holder1 = new Holder("Juan","juanPerez@gmail.com","Pass123");
const holder2= new Holder("Ana","anaLopez@gmail.com","Passw127");
const holder3= new Holder("Carlos","carlosJuarez@gmail.com","Pasword127");

const hasher = new StrategySHA256();

const trans1 = new CoinBase(token1,holder1,hasher);
const trans2 = new SimpleTransaction(trans1, holder2, hasher);


console.log('---');
console.log('H1: ' + holder1.getProfileInformation());
console.log('---');
console.log('H2: ' + holder2.getProfileInformation());
console.log('---');
console.log('T1: ' + trans1.getTransaction());
console.log('---');
console.log('T2: ' + trans2.getTransaction());





data = 'hola mundo1';
hashedData = hasher.generateHash(data);

console.log(hashedData);