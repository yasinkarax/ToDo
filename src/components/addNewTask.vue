<script>

export default {
    data() {
        return {
            head: 'All Tasks',
            addNewTaskText: 'Add a new task',
            addNewTaskButton: 'Add Task',
            NewTask: ''
        }
    },
    methods: {
        sendNewTask(){
            this.$emit('newTask', this.NewTask);
            this.NewTask = '';
        }
    }
}
</script>


<template>
    <div class="addTasksContainer">
        <div class="addTasksHead">
            <h1>{{ head }}</h1>
        </div>
    
        <div class="addTasks">
            <input 
                type="text" 
                :placeholder="addNewTaskText" 
                v-model="NewTask"
                id="newTaskInput"
            >
            <button @click="sendNewTask" id="newTaskButton">
                {{ addNewTaskButton }}
            </button>
        </div>
</div>
</template>


<style lang="sass" scoped>
@import '../assets/style/addNewTask/addNewTask.sass'
</style>
