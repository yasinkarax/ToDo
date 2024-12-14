    <script>
    import categories from './components/categories.vue'
    import addNewTask from './components/addNewTask.vue'
    import tasklist from './components/taskList.vue'


    export default {
        data(){
            return {
                task: '',
                category: '',
                taskCategory: '',
                id: 0,
                categoryList: [
                    {id: 1, name: 'Other', colors: {color: '#000000', backgroundColor: '#787FF6'}},
                    {id: 2, name: 'Work', colors: {color: '#000000', backgroundColor: '#FF9190'}},
                    {id: 3, name: 'Home', colors: {color:'#000000', backgroundColor: '#56C596'}},
                    {id: 4, name: 'Personal', colors: {color:'#000000', backgroundColor: '#FFCFEF'}},
                ],
                taskList: [
                    {id: 1, name: 'Task 1', category: 'Work', completed: false},
                    {id: 1, name: 'Task 1', category: 'Work', completed: false},
                    {id: 1, name: 'Task 1', category: 'Work', completed: false},
                    {id: 1, name: 'Task 1', category: 'Work', completed: false},
                ]
            }
        },
        components: {
            categories,
            addNewTask,
            tasklist
        },
        methods: {
            addCategory(newCategory){
                this.category = newCategory;
                this.categoryList.push({
                    id: this.categoryList.length + 1,
                    name: this.category
                });
            },
            takeNewTask(task, category) {
                this.task = task;
                this.taskCategory = category;
                this.taskList.push({
                    id: this.categoryList.length + 1,
                    name: this.task,
                    category: this.taskCategory
                })

            }
        },
        computed:{
        }
    }
    </script>
    <template>
        <div class="container">
            <div class="categories">
                <categories @add-category="addCategory" :categoryList="categoryList"/>
            </div>
            <div class="allTasks" style="color:red">
                <addNewTask :categoryList="categoryList" @add-new-task="takeNewTask"/>
                <tasklist :taskList="taskList"/>
            </div>
        </div>
    </template>

    <style scoped>

    </style>