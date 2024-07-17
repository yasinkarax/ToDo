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
                type="text" 
                v-model="newCategoryText" 
                :placeholder="AddNewCategory.addCategoryText"
                id="newCategoryText"
            >

            <button 
                v-show="showAddCategory" 
                @click="addNewCategory"
                id="addNewCategoryButton"
            >
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
                addCategoryButton: "New category",
                addCategoryText: "+ Type New Category",
            },
            categoryListName: "Categories",
            newCategoryText: '',
            showAddCategory: false,
            categoryCount: 0,
            categoryList: ['Favourites', 'Work', 'Home', 'School', 'Shopping', 'Other'],
           
        }
    },
    methods: {
        showAddCategoryButton(){
            this.showAddCategory = !this.showAddCategory;
        },
        hideAddCategoryButton(e){
            if(e.relatedTarget.id !== 'addNewCategoryButton' || e.relatedTarget.id == ''){
                this.showAddCategory = false;
                console.log(this.showAddCategory)
            } else{
                this.showAddCategory = true;
                console.log(e.relatedTarget.tagName);
                console.log(this.showAddCategory)
            }
        },
        addNewCategory(){
            if(this.newCategoryText !== '')
                this.categoryList.push(this.newCategoryText)

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