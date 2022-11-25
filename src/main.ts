import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab)
dom.watch();

const app= createApp({
    data() {
        return {
            image:'./assets/517-5176868_david-beckham-hummer-hd-png-download.png'
        }
    },
})
createApp(App)
.use(store)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
