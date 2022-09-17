import { createApp } from 'vue';
import App from './App.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import HomePage from './HomePage.vue';
import ProfilePage from './ProfilePage.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/profile', component: ProfilePage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.component('PulseLoader', PulseLoader);
app.mount('#app')

