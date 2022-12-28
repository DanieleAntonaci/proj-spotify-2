<script>
import UpperNav from './NavBarRight/UpperNav.vue';

export default {
  components: { UpperNav }
}
</script>

<template>
  <div id="nav-bar">
    <UpperNav/>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#nav-bar {
  background-color: #000000;
  height: 100%;
  width: 400px;
}
</style>
