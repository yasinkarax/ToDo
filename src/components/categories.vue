<script>
export default {
    data(){
        return {
            AddNewCategory: {
                addCategoryButton: "New category",
                addCategoryText: "+ Type New Category",
            },
            categoryListName: "Categories",
            newCategoryText: '',
            showAddCategory: false,
            categoryCount: 0,
            categoryList: [
                {id: 1 , label: 'Favourites'}, 
                {id: 2 , label: 'Work'}, 
                {id: 3 , label: 'Home'},]
        }
    },
    methods: {
        showAddCategoryButton(){
            this.showAddCategory = !this.showAddCategory;
        },
        addNewCategory(){
            if(this.newCategoryText.trim() !== ''){
                    const newCategory = {
                    id: this.categoryList.length + 1,
                    label: this.newCategoryText
                }
            this.categoryList.push(newCategory);
            } 
            
            this.newCategoryText = '';
        }
    },
    computed: {
        categoryCount(){
            return this.categoryList.length;
        }
    }
}
</script>
<style lang="sass">
@import "@/assets/style/categories.sass"

</style>
<template>
    
    <div id="category">
        <div class="categoryTitle" id="categoryTitle">

            <div class="categoryListName">
                {{categoryListName}}  
            </div>
            <div :class="categoryCount">
                ({{ categoryCount }})
            </div>

        </div>
        <div id="categoryList">

            <ul>
                <li 
                    :key="category.id" 
                    v-for="category in categoryList"
                    class="categoryItem"
                >
                    {{category.label}}
                </li>
            </ul>

        </div>
        <div class="addCategory" id="addCategory">

            <input name="newCategory" 
                @focus="showAddCategoryButton"
                type="text" 
                v-model="newCategoryText" 
                :placeholder="AddNewCategory.addCategoryText"
                id="newCategoryText"
            >

            <button 
                @click="addNewCategory"
                id="addNewCategoryButton"
            >
                {{AddNewCategory.addCategoryButton}}
            </button>

        </div>
    </div>
</template>
