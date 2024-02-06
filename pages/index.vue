<script setup lang="ts">
const { data: categories } = await useFetch('https://yoga-api-nzy4.onrender.com/v1/categories')
</script>

<template>
    <div>
      <FirstTestComponent> </FirstTestComponent>  
      <div>
        <ul><li v-for="category in categories" >
          <NuxtLink to="/">{{ category.category_name }}</NuxtLink>
          </li></ul>
        
      
          <ul><li v-for ="category in categories">{{ category.poses[0].pose_description }}</li></ul>
          
        
          

      </div>
    </div>
  </template>
  