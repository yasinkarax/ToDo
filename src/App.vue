<script>
import categories from './components/categories.vue'
import addNewTask from './components/addNewTask.vue'
import tasklist from './components/taskList.vue'

export default {
  data() {
    return {
      userData: {
        categoryList: [
          {id: 0, name: 'Other', colors: {color: '#000000', backgroundColor: '#787FF6'}},
          {id: 1, name: 'Work', colors: {color: '#000000', backgroundColor: '#FF9190'}},
          {id: 2, name: 'Home', colors: {color: '#000000', backgroundColor: '#56C596'}},
          {id: 3, name: 'Personal', colors: {color: '#000000', backgroundColor: '#FFCFEF'}}
        ],
        taskList: [
          {id: 0, name: 'Finish the project report.', category: 'Work', completed: false},
          {id: 1, name: 'Clean the living room.', category: 'Work', completed: false},
          {id: 2, name: 'Go for a 30-minute walk.', category: 'Work', completed: false},
          {id: 3, name: 'Plan your next vacation.', category: 'Work', completed: false}
        ]
      }
    }
  },
  components: {
    categories,
    addNewTask,
    tasklist
  },
  methods: {
    addCategory(category) {
      const newCategory = {
        id: this.categoryId,
        name: category,
        colors: {color: '#000000', backgroundColor: this.randomColor}
      };
      this.userData.categoryList.push(newCategory);
      this.updateLocalStorage();
    },
    takeNewTask(NewTask) {
      const newTask = {
        ...NewTask,
        id: this.taskId,
        completed: false
      };
      this.userData.taskList.push(newTask)
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('userData', JSON.stringify(this.userData));
    },
    loadUserData() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        this.userData = userData;
      }
    }
  },
  computed: {
    categoryId() {
      return this.userData.categoryList.length + 1;
    },
    taskId() {
      return this.userData.taskList.length + 1;
    },
    randomColor() {
      let color = Math.floor(Math.random() * this.userData.categoryList.length);
      let bgColor = this.userData.categoryList[color].colors.backgroundColor;
      return bgColor;
    }
  },
  mounted() {
    this.loadUserData();
  }
}
</script>
<template>
  <div class="container">
    <div class="categories">
      <categories @add-category="addCategory" :categoryList="userData.categoryList" />
    </div>
    <div class="allTasks" style="color:red">
      <addNewTask :categoryList="userData.categoryList" @take-new-task="takeNewTask" />
      <tasklist :taskList="userData.taskList" />
    </div>
  </div>
</template>

<style scoped></style>