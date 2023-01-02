<script>
export default {


}
</script>

<template>
    <div id="song-control">
        <div id="button">
            <font-awesome-icon class="button-icon" icon="fa-solid fa-shuffle" />
            <font-awesome-icon class="button-icon" icon="fa-solid fa-backward-step" />
            <font-awesome-icon class="button-icon play" icon="fa-solid fa-circle-play" />
            <font-awesome-icon class="button-icon" icon="fa-solid fa-forward-step" />
            <font-awesome-icon class="button-icon" icon="fa-solid fa-repeat" />


        </div>
        <div id="bar">
            0,01
            <div id="bar-song">
                <div id="bar-listen">
                    <font-awesome-icon id="pointer" icon="fa-solid fa-circle" />
                </div>
            </div>
            3.00
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

#song-control {
    height: 100%;
    width: 50%;

    #button {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 70%;

        .button-icon {
            padding: 20px 15px;
            font-size: 20px;
            opacity: .7;

            &:hover {
                opacity: 1;
            }

            &.play {
                font-size: 35px;
                opacity: 1;
            }
        }
    }

    #bar {
        display: flex;
        align-items: center;
        justify-content: center;

        #bar-song {
            width: 60%;
            height: 3px;
            background-color: gray;
            margin: 0 15px;

            #bar-listen {
                background-color: white;
                width: 40%;
                height: 100%;
                position: relative;

                #pointer {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translate(50%, -50%);

                    display: none;
                }
            }

        }

        &:hover #bar-song #bar-listen {
            background-color: greenyellow;

            #pointer {
                display: inline;
            }
        }
    }
}
</style>