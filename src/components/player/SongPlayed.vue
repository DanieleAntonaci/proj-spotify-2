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
    <div class="container">
        <img :src="store.imageSong" alt="">
        <div>
            <h3>
                {{ store.listenedSong }} 
            </h3>
            <h4>
                {{ store.listenedAutor }}
            </h4>
        </div>
        <font-awesome-icon icon="fa-regular fa-heart" class="icon" v-show="store.listenedSong != ''"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

.container {
    display: flex;
    align-items: center;

    width: 25%;
    height: 100%;

    img {
        height: 100%;
        padding: 20px;
    }

    div {
        font-size: 12px;

        h3 {
            font-weight: 500;

        }

        h4 {
            font-weight: 200;
            padding: 5px 0;
            opacity: .8;
        }
    }

    .icon {
        padding-left: 30px;
    }

}
</style>