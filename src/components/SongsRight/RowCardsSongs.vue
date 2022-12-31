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
    }, methods: {
        getPlaylist() {
            for (let i = 0; i < this.artists.length; i++) {
                let artist = this.artists[i]
                console.log(artist);
                let apiArtist = store.apiLink + artist;

                axios.get(apiArtist).then(
                    res => {
                        store.songs.push({
                            name: res.data.artists.hits[0].artist.name,
                            songs: res.data.tracks.hits,
                            positionArtist: i
                        });
                    }
                )
            }
            console.log(store.songs);
        }
    },
    mounted() {
        this.getPlaylist()
    },
}
</script>

<template>
    <div>
        <CardSong :artistAndSongs="store.songs"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;
</style>