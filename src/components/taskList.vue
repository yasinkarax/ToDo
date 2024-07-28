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
        <div class="taskListContainer">
            <ul>
                <li v-for="task in taskList">
                    {{ task }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang='sass'>
@import '../assets/style/taskList/taskList.sass'
</style>