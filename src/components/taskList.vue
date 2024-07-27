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
        <ul>
            <li v-for="task in taskList">
                {{ task }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>