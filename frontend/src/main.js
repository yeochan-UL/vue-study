import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import axios from 'axios'
/**
 * 드래그 라이브러리
 * https://mauricius.github.io/vue-draggable-resizable/?path=/story/parent--parent-basic-case
*/
import { VueDraggableResizable } from 'vue-draggable-resizable-vue3';

const pinia = createPinia()
import router from './router';
import GlobalComponent from './components/global/globalComponent';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
  })

const app = createApp(App);

app.provide('axios', axios);

app.use(router)
    .use(VueDraggableResizable)
    .use(pinia)
    .use(GlobalComponent)
    .use(vuetify)
    .mount('#app');
