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
    <h1>{{ head }}</h1>

    <input 
        type="text" 
        :placeholder="addNewTaskText" 
        v-model="NewTask"
    >
    
    <button @click="sendNewTask">{{ addNewTaskButton }}</button>
    
</template>


<style lang="sass" scoped>
</style>
