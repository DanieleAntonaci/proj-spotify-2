<script>
export default {
    data() {
        return {
            navigationMenu: [
                {
                    name: 'Home',
                    icon: 'fa-house',
                    link: '#'
                },
                {
                    name: 'Cerca',
                    icon: 'fa-magnifying-glass',
                    link: '#'
                },
                {
                    name: 'La tua libreria',
                    icon: 'fa-chart-simple',
                    link: '#'
                },
            ],
            activeItem: 0
        }
    },
}
</script>

<template>
  <div id="my-menu">
    <a href="#" class="title">
        <font-awesome-icon class="icon-title" icon="fa-brands fa-spotify" />
        <h1>
            Spotify
        </h1>
    </a>

    <ul>
        <li v-for="(element, index) in navigationMenu" >
            <a :href="element.link" class="my-nav" :class="index === activeItem ? 'focus' : ''">
                <font-awesome-icon class="icon" :icon="'fa-solid ' + element.icon"/>
                {{ element.name }}

            </a>

        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

#my-menu {
    height: 250px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .title {
        font-size: 40px;

        .icon-title {
            vertical-align: bottom;
        }

        h1 {
            display: inline;
            font-size: 25px;
            font-weight: 500;
            vertical-align: middle;
        }
    }

    ul {
        padding: 20px 0;

        li {
            padding: 7px 0;



            a {
                opacity: .5;
                transition: opacity .3s ease;

                .icon {
                    vertical-align: middle;
                    padding-right: 14px;
                    font-size: 22px;
                }
            }

            .focus,
            a:hover {
                opacity: 1;
            }
        }
    }
}
</style>
