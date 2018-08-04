<template>
    <div class="cm-teach">
        <div class="alert-box">
            <div class="canvas">
            </div>
            <div class="button-group">
                <input type="button" :value="'放大'+bigTime" @click="bigTimeFn">
                <input type="button" :value="penTypeArr[penState]" @click="changePenFn">
                <input type="button" :value="cutTypeArr[cutState]" @click="cutFn">
                <input type="button" value="关闭" @click="closeFn">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name : 'CmTeach',
    data(){
        return {
            bigTime : 1,//放大倍数
            penState : 0,//涂鸦笔状态 0：正常   1：涂鸦笔   2：正常   3：橡皮
            penTypeArr : [ '正常' , '涂鸦笔' , '正常' , '橡皮'],
            cutState : 0,//切换状态 0：切换 1：切回
            cutTypeArr : [ '切换' , '切回']
        }
    },
    methods : {
        //放大功能
        bigTimeFn(){
            this.bigTime = this.bigTime + 1 == 4 ? 1 : this.bigTime + 1;
        },
        //涂鸦笔
        changePenFn(){
            if(this.penState == 3){
                this.clearFn();
            }
            this.penState = this.penState + 1 == 4 ? 1 : this.penState + 1;
        },
        //清除画板
        clearFn(){},
        //切换
        cutFn(){
            this.cutState = this.cutState + 1 == 2 ? 0 : this.cutState + 1;
        },
        //关闭
        closeFn(){},
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
        .button-group{
            position : absolute;
            bottom : 0;
            right : 0;
            input{
                width : 70px;
                height : 50px;
                line-height : 50px;
                font-size : 16px;
                text-align : center;
            }
        }
    }
}

</style>

