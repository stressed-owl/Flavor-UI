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
        dropdown: {
            root: ({ props }: { props: any }) => ({
                class: [
                    'cursor-pointer inline-flex relative select-none',
                    'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                    'w-full md:w-56',
                    'hover:border-[#F3D9DC] focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                    { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
                ]
            }),
            input: ({ props }: { props: any }) => ({
                class: [
                    'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                    'bg-transparent border-0 text-gray-800',
                    'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                    'focus:outline-none focus:shadow-none',
                    { 'pr-7': props.showClear }
                ]
            }),
            trigger: {
                class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg']
            },
            wrapper: {
                class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg']
            },
            list: 'py-3 list-none m-0',
            item: ({ context }: { context: any }) => ({
                class: [
                    'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                    'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                    'hover:bg-[#F3D9DC]',
                    {
                        'text-black': !context.focused && !context.selected,
                        'bg-[#e8d2d5]': context.focused && !context.selected,
                        'bg-[#F3D9DC]': context.focused && context.selected,
                    }
                ]
            }),
            itemgroup: {
                class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'cursor-auto']
            },
            header: {
                class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg']
            },
            filtercontainer: 'relative',
            filterinput: {
                class: [
                    'pr-7 -mr-7',
                    'w-full',
                    'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
                ]
            },
            filtericon: '-mt-2 absolute top-1/2',
            clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
            transition: {
                enterFromClass: 'opacity-0 scale-90',
                enterActiveClass: 'transition-transform transition-opacity duration-250',
                leaveActiveClass: 'transition-opacity duration-250 ease-linear',
                leaveToClass: 'opacity-0'
            }
        }
    }
})
app.mount('#app')
