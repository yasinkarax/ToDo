<style>
*{
    margin: 0;
    padding: 0
}
.container{
    display: flex
}
</style>
<template>
    <div class="container">
        <categories/>

    </div>
</template>
<script>
export default {
    data(){
        return {
            categorieList: ['Favourites', 'Work', 'Home', 'School', 'Shopping', 'Other']
        }
    }
}
</script>