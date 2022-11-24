import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app= createApp({
    data() {
        return {
            image:'./assets/517-5176868_david-beckham-hummer-hd-png-download.png'
        }
    },
})


createApp(App).use(store).use(router).mount('#app')
