import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.min.css'

import '@fontsource/montserrat';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
