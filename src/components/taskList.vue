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
            addNewTask
        }
    }
</script>
<template>
    <div>
        <addNewTask @newTask="showNewTask"/>
        <div id="taskListContainer">
            <task/>
        </div>
    </div>
</template>

<style scoped lang='sass'>
@import '../assets/style/taskList/taskList.sass'
</style>