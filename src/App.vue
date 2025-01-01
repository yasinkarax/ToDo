<script>
import categories from './components/categories.vue'
import addNewTask from './components/addNewTask.vue'
import tasklist from './components/taskList.vue'


export default {
    data() {
        return {
            categoryList: [
                { id: 0, name: 'Other', colors: { color: '#000000', backgroundColor: '#787FF6' } },
                { id: 1, name: 'Work', colors: { color: '#000000', backgroundColor: '#FF9190' } },
                { id: 2, name: 'Home', colors: { color: '#000000', backgroundColor: '#56C596' } },
                { id: 3, name: 'Personal', colors: { color: '#000000', backgroundColor: '#FFCFEF' } },
            ],
            taskList: [
                { id: 0, name: 'Finish the project report.', category: 'Work', completed: false },
                { id: 1, name: 'Clean the living room.', category: 'Work', completed: false },
                { id: 2, name: 'Go for a 30-minute walk.', category: 'Work', completed: false },
                { id: 3, name: 'Plan your next vacation.', category: 'Work', completed: false },
            ]
        }
    },
    components: {
        categories,
        addNewTask,
        tasklist
    },
    methods: {
        addCategory(newCategory) {
            const category = {
                id: this.categoryId,
                name: newCategory,
                colors: { color: '#000000', backgroundColor: this.randomColor }
            }
            localStorage.setItem('categoryList', JSON.stringify(category));
        },
        takeNewTask(NewTask) {
            this.taskList.push(
                {
                    id: this.taskId,
                    name: NewTask.task,
                    category: NewTask.category.name,
                    completed: false
                }
            )
            console.log(NewTask)
        }

    },
    computed: {
        categoryId() {
            return this.categoryList.length + 1;
        },
        taskId() {
            return this.taskList.length + 1;
        },
        randomColor() {
            let color = Math.floor(Math.random() * this.categoryList.length);
            let bgColor = this.categoryList[color].colors.backgroundColor;
            return bgColor;
        }
    },
    mounted() {
        const categoryList = localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
        const taskList = localStorage.setItem('taskList', JSON.stringify(this.taskList));

        if (!categoryList) {
            localStorage.setItem('categoryList', JSON.stringify(this.categoryList))
        } else {
            this.categoryList = categoryList;
        }

        if (!taskList) {
            localStorage.setItem('taskList', JSON.stringify(this.taskList))
        } else {
            this.taskList = taskList
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="categories">
            <categories @add-category="addCategory" :categoryList="categoryList" />
        </div>
        <div class="allTasks" style="color:red">
            <addNewTask :categoryList="categoryList" @take-new-task="takeNewTask" />
            <tasklist :taskList="taskList" />
        </div>
    </div>
</template>

<style scoped></style>