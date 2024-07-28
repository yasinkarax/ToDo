<script>
import categories from './components/categories.vue'
import addNewTask from './components/addNewTask.vue'
import tasklist from './components/taskList.vue'


export default {
    data(){
        return {
            categorieList: ['Favourites', 'Work', 'Home', 'School', 'Shopping', 'Other'],
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
            <categories/>
            <tasklist/>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0
}
.container{
    display: flex
}
</style>