<script>
export default {
    data() {
        return {
            actiePlaylist: 0,
            playlists: [
                {
                    name: 'Coding Music',
                    link: '#'
                },
                {
                    name: 'Chill Hits',
                    link: '#'
                },
                {
                    name: 'Deep Sleep Music ',
                    link: '#'
                },
                {
                    name: 'Focus Music for Coding',
                    link: '#'
                },
                {
                    name: 'Chillpop',
                    link: '#'
                },
                {
                    name: 'Lofi + chill',
                    link: '#'
                },
                {
                    name: 'Chill Guitar Beats',
                    link: '#'
                },
                {
                    name: 'Anime lofi beats 2022',
                    link: '#'
                },
                {
                    name: 'Modern Classic',
                    link: '#'
                },
                {
                    name: 'Sport',
                    link: '#'
                },
                {
                    name: 'Jazzhop',
                    link: '#'
                },
                {
                    name: 'Relaxing',
                    link: '#'
                },
                {
                    name: 'Lofi veats',
                    link: '#'
                },
                {
                    name: 'Awesome mix #1',
                    link: '#'
                },
                {
                    name: 'Anime mix',
                    link: '#'
                },
            ]
        }
    },
}
</script>

<template>
  <div id="album-nav">
    <ul>
        <li v-for="(playlist, index) in playlists" :class="actiePlaylist === index ? 'selected' : ''">
            <a :href="playlist.link">
                {{ playlist.name }}
            </a>
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

#album-nav {
    width: 100%;
    height: calc(100% - 333px);
    overflow-y: auto;


    ul {
        margin: 10px 0;

        li {
            line-height: 30px;
            font-size: 13px;
            opacity: .6;
        }

        .selected,
        li:hover {
            opacity: 1;
        }
    }
}
</style>
