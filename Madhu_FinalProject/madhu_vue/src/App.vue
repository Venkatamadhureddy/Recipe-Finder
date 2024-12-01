<template>
  <RecipeHeader/>
  <RecipesList :recipesList = recipesList  />
</template>

<script>
import RecipeHeader from "./components/RecipeHeader.vue";
import RecipesList  from "./components/RecipesList.vue";

  export default{
    name:"App",
    components:{
      RecipeHeader,
      RecipesList 
    },
    data(){
      return {
        recipesList :[]
      }
    },methods:{
      async fetchRecipeDetails(){
        const res = await fetch("http://localhost:1971/api");
        const recipeData = await res.json();
        return  recipeData[0].recipes;
      }
    },
    async created(){
      this.recipesList  = await this.fetchRecipeDetails();
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

  *{
     font-family: "Lora", serif;
  }
</style>