<template>
  <div id="app">
    <st-title></st-title>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StTitle from './components/st/st-title'
export default {
  name: 'App',
  data(){
    return {}
  },
  components : {
    StTitle
  }
}
</script>

<style lang="scss">
body,html{
  width : 100%;
  height : 100%;
}
#app{
  width : 100%;
  height : 100%;
  .content{
    width : 100%;
    height : calc(100% - 100px);
    overflow : hidden;
  }
}
</style>
