<script>
    export default{
        data(){
            return {
            }
        },
        methods: {
            completed(){
                this.task.completed = !this.task.completed;
                console.log(this.task.completed)
            }
        },
        props: {
            task: {
                type: Object,
                required: true
            },
        },
        components: {
        }
    }
</script>                     
<template>
    <div id="task" >
        <div class="taskCheck" @click.prevent="completed()">
            <div id="taskCheckIcon"  >
                <img v-if="task.completed" src="../assets/icons/check.svg" alt="">
            </div>
        </div>
        <div id="taskText">
            {{ task.name }}
        </div>
        
        <div id="taskCategory">
            {{ task.category }}
        </div>
    </div>
</template>
<style scoped lang="sass">
@import "../assets/style/task/task.sass"
</style>