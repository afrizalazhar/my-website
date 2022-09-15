import { createApp } from 'vue'
import App from './App.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App)
app.component('PulseLoader', PulseLoader);
app.mount('#app')

