<script>
export default {
    data(){
        return {
            AddNewCategory: {
                addCategoryButton: "New category",
                addCategoryText: "Add New Category",
            },
            categoryListName: "Categories",
            newCategory: '',
            categoryCount: 0,
        }
    },
    props: {
        categoryList: {
            type: Array,
            required: true
        }
    },
    methods: {
        addNewCategory(){
            if (this.newCategory.trim() !== '') {
                this.$emit('add-category', this.newCategory);
                this.newCategory = '';
            }
        }
    },
    computed: {
        categoryCounter(){
            return this.categoryList.length;
        }
    }
}
</script>

<template>
    
    <div id="category">
        <div class="categoryTitle" id="categoryTitle">

            <div class="categoryListName">
                {{categoryListName}}  
            </div>
            <div :class="categoryCount">
                ({{ categoryCounter }})
            </div>

        </div>
        <div id="categoryList">

            <ul>
                <li 
                    :key="category.id" 
                    v-for="category in categoryList"
                    class="categoryItem"
                >
                    {{category.name}}
                </li>
            </ul>

        </div>
        <div class="addCategory" id="addCategory">

            <input 
                name="newCategory" 
                type="text" 
                v-model="newCategory" 
                :placeholder="AddNewCategory.addCategoryText"
                id="newCategory"
                maxlength="19"
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
<style lang="sass">
@import "../assets/style/categories/categories.sass"    
</style>