<template>
    <div class="gridContainer">
        <div v-for="recipe of recipesList" :key="recipe.recipeName">
            <SingleRecipe :recipe = recipe />
        </div>
    </div>
</template>

<script>
    import SingleRecipe from "./SingleRecipe.vue";

    export default{
        name:"RecipesList",
        components:{
           SingleRecipe
        },
        props:{
            recipesList: Array
        }
    }
</script>

<style scoped>
.gridContainer{
    display: grid;
    grid-template-columns:auto auto auto;
    gap:1em;
}
</style>