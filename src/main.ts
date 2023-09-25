import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import "./index.css";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';

const app = createApp(App)

app.component('PrimeButton', Button);
app.component('PrimeDialog', Dialog);

app.use(router)
app.use(createPinia())
app.use(PrimeVue, {
    pt: {
        button: {
            root: { class: 'bg-[#F3D9DC] py-3 px-6 rounded-[4px] min-w-[130px] hover:bg-[#e8d2d5] hover:duration-300' },
            label: 'text-lg font-medium',
        },
    }
})
app.mount('#app')
