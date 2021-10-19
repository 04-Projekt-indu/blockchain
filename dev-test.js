// call : npm run dev-test
// Import
const Block = require ("./block");
const Blockchain = require("./blockchain");

/***Test der block - functionalität */

// const block = new Block("aktuelle zeit","hash1","hash2","meine Daten");
// console.log(block.toString());

//console.log(Block.genesis().toString());
//const testBlock = Block.mineBlock(Block.genesis(),"testdaten");
//console.log(testBlock.toString());

const chain = new Blockchain();
chain.addblock("daten von block1");
chain.addblock("daten von block2");
console.log(chain);