import { reactive } from "vue";

export const store = reactive({
    // api 
    apiLink: 'https://shazam.p.rapidapi.com/search?rapidapi-key=19aaedfeb7msh4e247817a68dee4p17d581jsn136bd7b8ee0f&term=',
    apiKey: 'api-key=19aaedfeb7msh4e247817a68dee4p17d581jsn136bd7b8ee0f',
    search: '',
    songs: [],
    artist: '',
    listenedAutor: '',
    listenedSong: '',
    imageSong: '',
    numSong: 0,
    numAutor: 0
})