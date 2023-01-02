<script>
export default {

}
</script>

<template>
    <div id="row">
        <font-awesome-icon class="icon" icon="fa-solid fa-bars" />
        <font-awesome-icon class="icon" icon="fa-solid fa-radio" />
        <font-awesome-icon class="icon" icon="fa-solid fa-volume-high" />
        <div id="bar-song">
            <div id="bar-listen">
                <font-awesome-icon id="pointer" icon="fa-solid fa-circle" />
            </div>
        </div>
        <font-awesome-icon class="icon last" icon="fa-solid fa-up-right-and-down-left-from-center" />
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

#row {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 25%;
    height: 100%;

    .icon {
        padding: 0 7px;

        &.last {
            margin-right: 20px;
        }
    }

    #bar-song {
        width: 25%;
        height: 4px;
        border-radius: 5px;
        background-color: gray;
        margin: 0 15px;

        #bar-listen {
            background-color: white;
            width: 40%;
            height: 100%;
            position: relative;
            border-radius: 5px 0 0 5px;

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
        background-color: #1db954;

        #pointer {
            display: inline;
        }
    }
}
</style>