<script>
    import addNewTask from './addNewTask.vue'
    export default {
        data(){
            return {
                taskList: []
            }
        },
        methods: {
            showNewTask(newTask){
                this.taskList.push(newTask);
            }
        },
        components: {
        }
    }
</script>
<template>
    <div>
        <div id="taskListContainer">
            <task/>
        </div>
    </div>
</template>

<style scoped lang='sass'>
@import '../assets/style/taskList/taskList.sass'
</style>