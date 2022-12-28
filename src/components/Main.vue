<script>
import NavBarRight from './NavBarRight.vue';
import SongsSection from './SongsSection.vue'

export default {
    components: {
        NavBarRight,
        SongsSection
    }
}
</script>

<template>
  <div id="main">
    <NavBarRight/>
    <SongsSection/>
  </div>
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
