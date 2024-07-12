import { createApp } from 'vue'

import categories from './components/categories.vue'
import App from './App.vue'

const app = createApp(App)
app.component('categories', categories)

app.mount('#app')
