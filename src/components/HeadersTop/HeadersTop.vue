<template>
    <div class="headers">{{headersTop}}</div>
</template>

<script>
export default {
    name:'headersTop',
    data(){
        return {
            headersTop:'这是一个没有感情的Header!'
        }
    }
}
</script>

<style lang="scss" scoped>
    .headers{
        color: #fff;
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>