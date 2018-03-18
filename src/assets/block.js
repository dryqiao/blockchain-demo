const SHA256 = require('crypto-js/sha256')
class Block {
    constructor (index, tiemstamp, data, prevHash = '') {
        this.index = index
        this.tiemstamp = tiemstamp
        this.data = data
        this.prevHash = prevHash
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return SHA256(this.index + this.tiemstamp + this.data + this.prevHash)
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }
    createGenesisBlock() {
        return new Block(0, new Date(), 'Hello World!', '0')
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1].hash   
    }
    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock()
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
}

export {Block, BlockChain}