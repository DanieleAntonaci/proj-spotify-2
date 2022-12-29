<script>
import RecentlyListen from './RecentlyListen.vue';

export default {
    components: { RecentlyListen }
}
</script>

<template>
  <div id="my-playlist">
    <div id="my-account">
        <div>
            <font-awesome-icon class="arrow left" icon="fa-solid fa-angle-left" />
            <font-awesome-icon class="arrow right" icon="fa-solid fa-angle-right" />
        </div>
        <div id="username">
            <img src="/images/user.png" alt="">
            Daniele
            <font-awesome-icon class="arrow-down" icon="fa-solid fa-caret-down" />
        </div>
    </div>
    <RecentlyListen/>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

#my-playlist {
    padding: 15px 30px;
    min-height: 300px;
    background: linear-gradient(#1b0d4d 20%, #121212 100%);

    #my-account {
        height: 50px;

        display: flex;
        justify-content: space-between;

        .arrow {
            background-color: #121212;
            padding: 8px 13px;
            font-size: 20px;
            border-radius: 50%;
            color: gray;

            &.left {
                margin-right: 25px;
            }
        }

        #username {
            background-color: #000;

            width: 150px;
            height: 35px;
            border-radius: 30px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                height: 30px;
                border-radius: 50%;
            }

            .arrow-down {
                padding-right: 15px;
            }
        }
    }
}
</style>
