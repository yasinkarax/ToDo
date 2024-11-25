<script>
export default {
    data() {
        return {
            head: 'All Tasks',
            inputText: 'Add a new task',
            addNewTaskButton: 'Add Task',
            NewTask: '',
            category: '',
            categoryAlert: false
        }
    },
    props: {
        categoryList: {
            type: Array,
            required: true
        }
    },
    methods: {
        sendNewTask() {
            if (this.category > 0 && this.NewTask.trim() !== '') {
                this.$emit('add-new-task', this.NewTask, this.category);
                this.NewTask = '';
                this.category = '';
                this.categoryAlert = !this.categoryAlert
            } else {
                this.categoryAlert = true;
                console.log('hata')
            }
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
            <div class="newTask">
                <input type="text" :placeholder="inputText" v-model="NewTask" id="newTaskInput">
                <div id="categories">
                    <select v-model="category" id="categorySelect">
                        <option value="" disabled >Select a category</option>
                        <option :value="category.id" :key="category.id" v-for="category in categoryList">
                            {{ category.name }}
                        </option>
                   </select>
                </div>
            </div>
             <div id="categoryAlert" v-if="categoryAlert">Don't forget a task and select a category, please!</div>
            <button @click="sendNewTask" id="newTaskButton">
                {{ addNewTaskButton }}
            </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/style/addNewTask/addNewTask.sass'
</style>