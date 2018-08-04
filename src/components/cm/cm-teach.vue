<template>
    <div class="cm-teach">
        <div class="alert-box">
            <div class="canvas"></div>
        </div>
    </div>
</template>
<script>
export default{
    name : 'CmTeach',
    data(){
        return {}
    },
    methods : {

    }
}
</script>
<style lang="scss" scoped>
.cm-teach{
    width : 100%;
    height : 100%;
    position : relative;
    background : $bg-black1;
    border : 1px solid $color-ccc;
    .alert-box{
        width : 90%;
        height : 90%;
        @include po-center;
        border : 1px solid $color-fff;
        overflow : hidden;
        .canvas{
            width : 100%;
            height : 100%;
        }
    }
}

</style>

