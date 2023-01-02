/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleLeft, faAngleRight, faBackwardStep, faCaretDown, faChartSimple, faCircle, faCirclePause, faCirclePlay, faForwardStep, faHeart, faHouse, faMagnifyingGlass, faPlay, faPlus, faRepeat, faShuffle, faSquarePlus, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCircleDown as fasCircleDown, faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret,
    faSpotify,
    faHouse,
    faMagnifyingGlass,
    faChartSimple,
    faSquarePlus,
    faHeart,
    faPlus,
    fasCircleDown,
    faAngleRight,
    faAngleLeft,
    faCaretDown,
    faCirclePlay,
    fasHeart,
    faCirclePause,
    faShuffle,
    faBackwardStep,
    faForwardStep,
    faRepeat,
    faCircle
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
