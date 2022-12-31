<script>
import SongPlayed from './player/SongPlayed.vue';

export default {
  components: {
    SongPlayed
  }
}
</script>

<template>
  <div id="player">
    <SongPlayed/>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#player {
  background-color: #181818;
  height: 100px;
}
</style>
