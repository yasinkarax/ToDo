<script>
    export default{
        data(){
            return {
            }
        },
        methods: {
            
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
    <div id="task">
        <div class="taskCheck" @click="checked">
           <img id="checkIcon"  src="../assets/icons/check.svg" alt="">
        
        </div>
        <div id="taskText" style="color:red">
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