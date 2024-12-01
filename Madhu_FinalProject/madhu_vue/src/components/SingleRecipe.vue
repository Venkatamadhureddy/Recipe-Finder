<template>
    <div class="recipe-container">
        <div class="recipe-image">
            <img :src=recipe.recipeImage alt="Recipe Image"/>
        </div>
        <div>
            <h3>{{recipe.recipeName}}</h3>
            <div class="flex">
                <p><img src="https://img.icons8.com/?size=20&id=85506&format=png&color=000000" alt="Recipe cooking time icon"/>  {{recipe.cookingTime}} mins</p>
                <p><img src="https://img.icons8.com/?size=20&id=109051&format=png&color=000000" alt="Recipe cuisine type icon"/> {{recipe.cuisineType}}</p>
            </div>
            <p>{{recipe.instructions}}</p>
            <button @click="showIngredients = !showIngredients" class="view-btn">
                {{showIngredients ? "Hide Ingredients" : "View Ingredients"}}
            </button>

            <!-- Displays ingredients  when showIngredients is true -->
            <ul v-if="showIngredients">
                <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                    {{ ingredient }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:"SingleRecipe",
        props:{
            recipe: Object
        },
        data(){
            return{
                showIngredients: false,
            }
        }
    }
</script>

<style>
.recipe-container{
    border:transparent;
    border-radius:5px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    padding: 1em;
}
.flex{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.flex img{
    vertical-align:middle;
}
.recipe-image img{
    width:100%;
    height:280px;
} 
.view-btn{
    background-color: black;
    color: #ffffff;
    padding:0.5em;
    border: none;
    cursor:pointer;
}
</style>