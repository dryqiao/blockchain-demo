<template>
    <div class="block">
        {{hhh}} BLOCK
        {{qiaoCoin}}
    </div>
</template>
<script>
import {Block, BlockChain} from '../assets/block'
    export default {
        data() {
            return {
                'hhh': 'HELLO',
                qiaoCoin: []
            }
        },
        mounted() {
            this.qiaoCoin = new BlockChain()
            this.qiaoCoin.addBlock(new Block(1,new Date(),{data:'woshihaoren'}))
            console.log(this.qiaoCoin);
        }
    }

</script>
