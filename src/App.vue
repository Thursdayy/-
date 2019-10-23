<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
// .v-enter{
//   opacity: 0;
//   transform: translateX(100%);
//   // overflow: hidden;
// }
// .v-leave-to{
//   opacity: 0;
//   transform: translateX(-100%);
//   position: absolute;
// }
// .v-enter-active,
// .v-leave-active{
//   transition: all .5s ease;
  

// }

</style>
