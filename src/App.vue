<script>
import Main from './components/Main.vue';
import Player from './components/Player.vue';
export default {
  data() {
    return {

    }
  }, components: {
    Player,
    Main
  }
}
</script>

<template>
  <div>
    <Main/>
    <Player/>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/mixin' as *;
@use './style/partials/variables' as *;
</style>
