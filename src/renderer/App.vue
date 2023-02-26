<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>

</template>

<script setup>
// import HeaderBar from './components/HeaderBar.vue'
// import thriftClient from './render.js'
// const dic = "132";
// thriftClient.test1(dic, (error, res) => {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(res)
//   }
// })
</script>

<style>
#app {
  font-family: 'Times', 'Deng';
  font-size: 17px;
}
</style>
