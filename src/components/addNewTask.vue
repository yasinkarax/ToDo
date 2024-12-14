<script>
export default {
    data() {
        return {
            head: 'All Tasks',
            inputText: 'Add a new task',
            addNewTaskButton: 'Add Task',
            NewTask: '',
            categoryAlert: false,
            selectedCategory: '',
            visibilityCategories: true
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
            if (this.selectedCategory.id > 0 && this.NewTask.trim() !== '') {
                this.$emit('add-new-task', this.NewTask, this.selectedCategory);
                this.NewTask = '';
                this.selectedCategory = '';
                this.categoryAlert = !this.categoryAlert;
                this.selectedCategory = !this.selectedCategory;
            } else {
                this.categoryAlert = true;
                console.log('hata')
            }
        },
        categoriesToggle() {
            this.visibilityCategories = !this.visibilityCategories;
        },
        chooseCategory(category) {
            this.visibilityCategories = !this.visibilityCategories;
            this.selectedCategory = category;
            console.log(this.selectedCategory);
        }
    }

}
</script>
<template>
    <div class="addTasksContainer">
        <div class="addTasksHead">
            <h1>{{ head }}</h1>
        </div>
        <div id="newTask">
            <div id="newTaskInputContainer">
                <input type="text" :placeholder="inputText" v-model="NewTask" id="newTaskInput">
            </div>
            <div id="categories">
                <div 
                    id="categoriesToggle"
                    tabindex="0" 
                    @click="categoriesToggle"
                    :style="[selectedCategory.colors,]"
                    >
                    <span v-if="!selectedCategory">Select a category</span>
                    {{ selectedCategory.name }}
                </div>

                <div 
                    tabindex="0" 
                    class="category" 
                    @click="chooseCategory(category)" 
                    :class="{visibilityCategories: visibilityCategories}"
                    :style="[category.colors]"
                    :key="category.id" 
                    v-for="category in categoryList">
                    {{ category.name }}
                </div>
            </div>
        </div>

        <div id="categoryAlert" v-if="categoryAlert">Don't forget a task and select a category, please!</div>
        <button @click="sendNewTask" id="newTaskButton">
            {{ addNewTaskButton }}
        </button>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/style/addNewTask/addNewTask.sass'
</style>
1800 66
100 x
x1800= 100x66