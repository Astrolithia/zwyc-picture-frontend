import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'ant-design-vue/dist/reset.css'
import '@/access'
import 'vue3-colorpicker/style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import Vue3ColorPicker from 'vue3-colorpicker'
import VueCropper from 'vue-cropper'
import 'vue-cropper/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(Vue3ColorPicker)
app.use(VueCropper)
app.mount('#app')
