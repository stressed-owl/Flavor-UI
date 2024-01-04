import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia';
import "./index.css";
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { mdi, aliases } from "vuetify/iconsets/mdi-svg"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(vuetify)
app.mount('#app')
