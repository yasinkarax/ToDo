<script>

export default {
    data() {
        return {
            head: 'All Tasks',
            addNewTaskText: 'Add a new task',
            addNewTaskButton: 'Add Task',
            NewTask: '',
            category: null,
        }
    },
    methods: {
        sendNewTask(){
            this.$emit('newTask', this.NewTask);
            this.NewTask = '';
        }
    },
    props: {
        categoryList: {
            type: Array,
            required: true
        }
    }
}
</script>


<template>
    <div class="addTasksContainer">
        <div class="addTasksHead">
            <h1>{{ head }}</h1>
        </div>
    
        <div class="addTask">
            <input 
                type="text" 
                :placeholder="addNewTaskText" 
                v-model="NewTask"
                id="newTaskInput"
            >
            <select v-model="category">
                <option :value="null">Please select a category</option>
                <option v-for="category in categoryList" :key="category.id" :value="category">
                    {{ category.name }}
                </option>
            </select>
        </div>
        <div class="addTaskButton">
            <button @click="sendNewTask" id="newTaskButton">
                {{ addNewTaskButton }}
            </button>
        </div>
</div>
</template>


<style lang="sass" scoped>
@import '../assets/style/addNewTask/addNewTask.sass'
</style>
