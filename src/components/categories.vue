<script>
export default {
    data() {
        return {
            AddNewCategory: {
                addCategoryButton: "Add New category",
                addCategoryText: "Type a category",
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
        addNewCategory() {
            if (this.newCategory.trim() !== '') {
                this.$emit('add-category', this.newCategory);
                this.newCategory = '';
            }

            console.log(this.categoryList.length)
        }
    },
    computed: {
        categoryCounter() {
            return this.categoryList.length;
        }
    }
}
</script>

<template>

    <div id="category">
        <div class="categoryTitle" id="categoryTitle">

            <div class="categoryListName">
                {{ categoryListName }}
            </div>
            <div :class="categoryCount">
                ({{ categoryCounter }})
            </div>

        </div>
        <div id="categoryList" :class="{ scrollCategories: categoryList.length > 6 }">

            <ul>
                <li :key="category.id" v-for="category in categoryList" class="categoryItem">
                    {{ category.name }}
                </li>
            </ul>

        </div>
        <div class="addCategory" id="addCategory">

            <form @submit.prevent="addNewCategory">
                <input name="newCategory" type="text" v-model="newCategory"
                    :placeholder="AddNewCategory.addCategoryText" id="newCategory" maxlength="19">

                <button type="submit" id="addNewCategoryButton">
                    {{ AddNewCategory.addCategoryButton }}
                </button>
            </form>

        </div>
    </div>
</template>
<style lang="sass">
@import "../assets/style/categories/categories.sass"    
</style>