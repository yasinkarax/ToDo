import { createApp } from 'vue'

import allTasks from './components/newTask.vue'
//import addTask from './components/addTask.vue'
import taskList from './components/taskList.vue'
import categories from './components/categories.vue'

import App from './App.vue'

const app = createApp(App)
app.component('categories', categories)
app.component('allTasks', allTasks) 
app.component('taskList', taskList)
//app.component('addTask', addTask) 


app.mount('#app')
