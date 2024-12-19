<script>
export default {
    data() {
        return {
            head: 'All Tasks',
            inputText: 'Add a new task',
            addNewTaskButton: 'Add Task',
            NewTask: {
                task: '',
                category: ''
            },
            errorMessage: false,
            visibilityCategories: true,
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
            if(this.NewTask.task.trim()){
                this.$emit('take-new-task', this.NewTask);
                this.NewTask = {task: '', category: ''};
                this.errorMessage = !this.errorMessage;
            } else {
                this.errorMessage = true;
            }
        },
        categoriesToggle() {
            this.visibilityCategories = !this.visibilityCategories;
        },
        chooseCategory(category) {
            this.visibilityCategories = !this.visibilityCategories;
            this.NewTask.category = category;
            console.log(this.$refs.category)
        },
        closeCategoryList(event){
            if(event.target.class !== 'category'){
                this.visibilityCategories = false;
            }
        },
    },

}
</script>
<template>
    <div class="addTasksContainer">
        <div class="addTasksHead">
            <h1>{{ head }}</h1>
        </div>
        <form @submit.prevent="sendNewTask">
            <div id="newTask" >
                <div id="newTaskInputContainer">
                    <input 
                        type="text" 
                        :placeholder="inputText" 
                        v-model="NewTask.task" 
                        id="newTaskInput"
                        required
                        maxlength="20"
                    >
                </div>
                <div 
                    id="categories"
                    :class="{scrollCategories: categoryList.length > 5}"
                    >
                    <div 
                        id="categoriesToggle"
                        tabindex="0" 
                        @click="categoriesToggle"
                        :style="[NewTask.category.colors,]"
                        >
                        <span v-if="!NewTask.category">Select a category</span>
                        {{ NewTask.category.name }}
                    </div>

                    <div 
                        tabindex="0" 
                        class="category" 
                        ref="category"
                        @click="chooseCategory(category)" 
                        :class="{visibilityCategories: visibilityCategories}"
                        :style="[category.colors]"
                        :key="category.id" 
                        v-for="category in categoryList">
                        {{ category.name }}
                    </div>
                </div>
            </div>

            <div 
                id="categoryAlert" 
                v-if="errorMessage"
                role="alert"
            >
                <h2>Please type a task!</h2>
            </div>
            <button type="submit" id="newTaskButton">
                {{ addNewTaskButton }}
            </button>
        </form>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/style/addNewTask/addNewTask.sass'
</style>