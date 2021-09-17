import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import './scss/main.scss';
import VueAxios from 'vue-axios';

createApp(App)
    .use(VueAxios, axios)
    .mount('#root')
