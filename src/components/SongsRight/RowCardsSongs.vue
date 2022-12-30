<script>
import CardSong from './CardSong.vue';
import { store } from '../../store';
import axios from 'axios'


export default {
    components: { CardSong },
    data() {
        return {
            store,
            artists: [
                'Sheeran',
                'AC DC',
                'linkin park',

            ],
        }
    },
}
</script>

<template>
    <div v-for="(element, index) in artists">
        <CardSong :artist="element" :numList="index"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;
</style>