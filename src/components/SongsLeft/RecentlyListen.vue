<script>
export default {
    data() {
        return {
            playlists: [
                {
                    name: 'I miei brani',
                    image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
                },
                {
                    name: 'Ritorno al passato',
                    image: 'https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind2_DEFAULT-it.jpg',
                },
                {
                    name: 'Coding Music',
                    image: 'https://i.scdn.co/image/ab67706c0000bebb64a6ddbfdfeb6fafe5ccc085',
                },
                {
                    name: 'Cozy lofi beats',
                    image: 'https://i.scdn.co/image/ab67706c0000bebbc0e35e524ada255035d0324d',
                },
                {
                    name: 'Christmas Music',
                    image: 'https://mosaic.scdn.co/300/ab67616d0000b2732ead7786631d8dd3b59be4f0ab67616d0000b2734246e3158421f5abb75abc4fab67616d0000b2737845f74d6db14b400fa61cd3ab67616d0000b273fd56f3c7a294f5cfe51c7b17',
                },
                {
                    name: 'No Stress',
                    image: 'https://i.scdn.co/image/ab67706f000000039552982f27ea6bac6e244cc3',
                },
            ],
            hourOfDay: '',
        }
    }, methods: {
        date() {
            const date = new Date();
            let hour = date.getHours();

            // misura lóra del gionro e mi restituisce la fase della giornata
            if (hour > 7 && hour <= 13) {
                this.hourOfDay = 'Buongiorno'
            } else if (hour > 13 && hour <= 20) {
                this.hourOfDay = 'Buona Pomeriggio'
            } else if (hour > 20 && hour <= 23) {
                this.hourOfDay = 'Buonasera'
            } else if (hour > 23 && hour <= 7) {
                this.hourOfDay = 'Buona Notte'
            }
        }
    }, mounted() {
        this.date()
    },
}
</script>

<template>
    <div>
        <h1>{{ hourOfDay }}</h1>

        <div class="cards">
            <div class="card" v-for="playlist in playlists">
                <img :src="playlist.image" alt="I miei brani">
                <h2>{{ playlist.name }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/mixin' as *;
@use '../../style/partials/variables' as *;

.cards {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;

    .card {
        height: 80px;
        width: calc((100% / 3) - 30px);
        margin: 15px;
        background-color: #31373e;

        display: flex;
        align-items: center;

        img {
            height: 80px;
            margin-right: 20px;
        }

        h2 {
            display: inline-block;
            font-size: 16px;
        }
    }
}
</style>