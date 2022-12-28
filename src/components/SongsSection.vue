<script>
export default {

}
</script>

<template>
  <div id="songs">

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
