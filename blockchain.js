//Import

const Block = require ("./block");


class Blockchain {

constructor () {
            this.chain = [Block.genesis()]; // Array mit genesis - block
               }

addblock(data){

    const lastBlock = this.chain[this.chain.length -1];
    const block = Block.mineBlock(lastBlock,data)
    this.chain.push(block);

}
}

module.exports = Blockchain;