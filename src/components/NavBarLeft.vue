<script>
import UpperNav from './NavLeft/UpperNav.vue';
import AlbumNav from './NavLeft/AlbumNav.vue';

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
      <font-awesome-icon class="icon" icon="fa-regular fa-circle-down" />
      Istalla app
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
    height: 33px;
    padding: 6px 0;
    font-size: 13px;
    opacity: .8;

    .icon {
      font-size: 20px;
      padding-right: 10px;
      vertical-align: middle;
    }
  }
}
</style>
