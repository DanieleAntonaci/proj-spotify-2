<script>
import NavBarLeft from './NavBarLeft.vue';
import SongsSection from './SongsSection.vue'

export default {
  components: {
    NavBarLeft,
    SongsSection
  }
}
</script>

<template>
  <main id="main">
    <NavBarLeft/>
    <SongsSection/>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;
@use '../style/partials/variables' as *;

#main {
  background-color: blue;
  height: calc(100vh - 100px);
  display: flex;

}
</style>
