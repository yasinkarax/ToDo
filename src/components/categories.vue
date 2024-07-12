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
                    :key="category" 
                    v-for="category in categoryList"
                    class="categoryItem"
                >
                    {{category}}
                </li>
            </ul>
        </div>
        <div class="addCategory" id="addCategory">
            <input name="newCategory" 
                @focus="showAddCategoryButton" 
                @blur="hideAddCategoryButton" type="text" 
                v-model="newCategory" :placeholder="AddNewCategory.addCategoryText">
            <button v-show="showAddCategory" @click="addNewCategory">
                {{AddNewCategory.addCategoryButton}}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            AddNewCategory: {
                addCategoryButton: "Add New Category",
                addCategoryText: "Add Category",
            },
            categoryListName: "Kategoriler",
            categoryName: "Kategoriler",
            newCategoryText: '',
            showAddCategory: false,
            categoryList: ['Favourites', 'Work', 'Home', 'School', 'Shopping', 'Other'],
           
        }
    },
    methods: {
        showAddCategoryButton(){
            this.showAddCategory = !this.showAddCategory;
        },
        hideAddCategoryButton(){
            this.showAddCategory = !this.showAddCategory;
        },
        addNewCategory(){
            if(this.newCategoryText !== '')
                this.categoryList.push(this.newCategory)

            this.newCategoryText = '';
            this.categoryCount++;
        }
    },
    computed: {
        categoryCount(){
            return this.categoryList.length;
        }
    }
}
</script>