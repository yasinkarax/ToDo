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
                type: String,
                required: true
            },
            categorie: {
                type: String,
                required: false
            }
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
        <div id="taskText">
            {{ task }}
        </div>
        
        <div id="taskCategory">
            {{ taskCategories }}
        </div>
    </div>
</template>
<style scoped lang="sass">
@import "../assets/style/task/task.sass"
</style>