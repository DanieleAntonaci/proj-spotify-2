<script>
import UpperNav from './NavBarRight/UpperNav.vue';
import AlbumNav from './NavBarRight/AlbumNav.vue';

export default {
  components: {
    UpperNav,
    AlbumNav
  }
}
</script>

<template>
  <div id="nav-bar">
    <UpperNav/>
    <AlbumNav/>
    <div id="install-app">
      install
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#nav-bar {
  background-color: #000000;
  height: 100%;
  width: 400px;
  padding: 15px 25px 0;

  #install-app {
    width: 100%;
    height: 30px;
  }
}
</style>
