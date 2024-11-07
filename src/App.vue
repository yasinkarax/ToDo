<script>
import categories from './components/categories.vue'
import addNewTask from './components/addNewTask.vue'
import tasklist from './components/taskList.vue'


export default {
    data(){
        return {
            categoryList: [
                {id: 1, name: 'Other'},
                {id: 2, name: 'Work'},
                {id: 3, name: 'Home'},
                {id: 4, name: 'Personal'}
            ],
            taskList: [
                {id: 1, title: 'Task 1', category: 'Work', completed: false}
            ]
        }
    },
    components: {
        categories,
        addNewTask,
        tasklist
    }
}
</script>
<template>
    <div class="container">
        <div class="categories">
            <categories />
        </div>
        <div class="allTasks">
            <addNewTask :categoryList="categoryList" />
            <tasklist/>
        </div>
    </div>
</template>

<style scoped>

</style>