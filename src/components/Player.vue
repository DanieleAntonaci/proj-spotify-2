<script>
import SongPlayed from './player/SongPlayed.vue';
import SongControl from './player/SongControl.vue';

export default {
  components: {
    SongPlayed,
    SongControl
  }
}
</script>

<template>
  <div id="player">
    <SongPlayed/>
    <SongControl/>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#player {
  background-color: #181818;
  height: 100px;

  display: flex;
}
</style>
