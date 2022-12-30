<script>
import { store } from '../../store';
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="cards">
        <h1> {{ store.artist }} </h1>

        <div class="row">

            <div class="card" v-for="song in store.songs">
                <img :src="song.track.share.image" :alt="song.track.title">
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
            width: calc(100% / 6 - 20px);
            padding: 20px;
            background-color: #171717;

            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                align-self: center;

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