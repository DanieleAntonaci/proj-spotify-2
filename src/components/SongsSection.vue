<script>
import RowCardsSongs from './SongsRight/RowCardsSongs.vue';
import UpMainMyPlaylist from './SongsRight/UpMainMyPlaylist.vue';

export default {
  components: { UpMainMyPlaylist, RowCardsSongs }
}
</script>

<template>
  <div id="songs">
    <UpMainMyPlaylist/>
    <RowCardsSongs/>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#songs {
  background-color: #121212;
  height: 100%;
  width: calc(100% - 400px);
  overflow-y: auto;
}
</style>
