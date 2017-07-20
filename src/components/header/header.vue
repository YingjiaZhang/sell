<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
         <img width="64px" height="64px" :src="seller.avatar"/>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="descriptions">
        {{seller.description}}/{{seller.deliveryTime}}分钟到达
      </div>
      <div v-if="seller.supports" class="supports">
        <span class="icon"></span>
        <span calss="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
