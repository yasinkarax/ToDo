<script>
export default {
    data(){
        return {
            categorieList: ['Favourites', 'Work', 'Home', 'School', 'Shopping', 'Other'],
            taskList: []
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="categories">
            <categories/>
        </div>
        <div class="allTasks">
            <allTasks/>
            <taskList :newTask/>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0
}
.container{
    display: flex
}
</style>