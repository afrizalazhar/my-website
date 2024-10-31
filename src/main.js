import { createApp } from 'vue';
import App from './App.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import ProfilePage from './ProfilePage.vue';
import TebakTebakanPage from './TebakTebakanPage.vue';

const routes = [
    {path: '/', component: ProfilePage},
    {path: '/tebak-tebakan', component: TebakTebakanPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.component('PulseLoader', PulseLoader);
app.mount('#app')

