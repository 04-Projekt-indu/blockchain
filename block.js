// klasse
class Block {

        constructor(timestamp,lastHash,hash,data){
            this.timestamp = timestamp;
            this.lastHash = lastHash;
            this.hash = hash;
            this.data = data;
        }

        toString() {
            return ` Block -
                Timestamp: ${this.timestamp}
                Last Hash: ${this.lastHash}
                Hash: ${this.hash}
                data: ${this.data}
            `

        }

        static genesis(){ // 1. block der chain
            return new this("Genesis time","-----","xABc1234",["data1","data2"]); // call constructor
        }

        static mineBlock(lastBlock,ownData){ // weitere Blocks in der chain
            
            const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
            const lastHash = lastBlock.hash; // HASH-Wert des Vorgängers
            const hash = "Hash to do";

            return new this (timestamp,lastHash,hash,ownData);

        }


}

module.exports = Block; // Export als Module
