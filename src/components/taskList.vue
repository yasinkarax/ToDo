<script>
    //import addNewTask from './addNewTask.vue'
    import task from './task.vue'
    export default {
        data(){
            return {
            }
        },
        components: {
            task
        },
        props: {
            taskList: {
                type: Array,
                required: true
            }
        }
    }
</script>
<template>
    <div>
        <div id="taskListContainer">
            <task :task="task" v-for="task in taskList" :key="task.id"/>
        </div>
    </div>
</template>

<style scoped lang='sass'>
@import '../assets/style/taskList/taskList.sass'
</style>