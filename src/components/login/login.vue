<template>
    <div class="login">
        <div class="mark" @click="loginFn">
            <div class="code-mark"></div>
            <div class="code-pic"></div>
        </div>
        <p>
            打开
            <span>服务号</span>
            扫码登录
        </p>
        <div class="code-mark-server"></div>
    </div>
</template>
<script>
export default{
    name : 'Login',
    data(){
        return {}
    },
    methods : {
        loginFn(){
            this.$router.push({
                path : '/teach'
            });
        }
    }
}
</script>
<style lang='scss' scoped>
.login{
    width : 100%;
    height : 100%;
    position : relative;
    .mark{
        width : 300px;
        height : 400px;
        border : 1px solid $color-ccc;
        @include po-center;
    }
}
</style>
