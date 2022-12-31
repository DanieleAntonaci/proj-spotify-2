<script>
import { store } from '../../store';
import axios from 'axios';
export default {
    props: {
        artistAndSongs: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="cards" v-for="(element, index) in artistAndSongs">
        <h1> {{ element.name }} </h1>

        <div class="row">

            <div class="card" v-for="song in element.songs">
                <div class="img-song">
                    <img :src="song.track.share.image" :alt="song.track.title">
                    <font-awesome-icon class='play' icon="fa-solid fa-circle-play" />
                </div>
                <h3>{{ song.track.title }}</h3>
                <h4>{{ song.track.subtitle }}</h4>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

.cards {
    padding: 0 30px 15px;

    h1 {
        padding: 20px 0;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
            width: calc(100% / 5 - 20px);
            padding: 20px;
            background-color: #171717;

            &:hover .img-song .play {
                display: inline;
            }

            display: flex;
            flex-direction: column;

            .img-song {
                position: relative;
                width: 100%;
                align-self: center;

                img {
                    width: 100%;
                }

                .play {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    transform: translate(-25%, -25%);
                    color: #1ed760;
                    font-size: 40px;
                    background-color: #171717;
                    border-radius: 50%;
                    display: none;

                }

            }

            h3 {
                padding: 15px 0;
            }

            h4 {
                color: gray;
                font-weight: 300;
            }
        }
    }
}
</style>