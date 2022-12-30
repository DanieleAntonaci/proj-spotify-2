<script>
import CardSong from './CardSong.vue';
import { store } from '../../store';
import axios from 'axios'


export default {
    components: { CardSong },
    data() {
        return {
            store
        }
    }, methods: {
        getPlaylist() {
            axios.get(store.apiLink).then(
                res => {
                    store.songs = res.data.tracks.hits
                    store.artist = res.data.artists.hits[0].artist.name
                    console.log(store.songs);
                }
            )
        }
    },
    mounted() {
        this.getPlaylist()
    },
}
</script>

<template>
    <div >
        <CardSong/>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;
</style>