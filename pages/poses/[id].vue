<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const { data: categories } = await useFetch('https://yoga-api-nzy4.onrender.com/v1/categories')
</script>

<template>
  <div>
    <ul class="card-container" v-if="categories">
      <li v-for="category in categories" :key="category.id">
        <div v-if="category.poses && category.poses[route.params.id]">
          
          <ul class="card">
            <li><img :src="category.poses[route.params.id].url_png" alt=""></li>
            <li><p>Category :</p>{{ category.poses[route.params.id].category_name }}</li>
            <li><p>English Name:</p>{{ category.poses[route.params.id].english_name }}</li>
            <li><p>Sanskrit Name Adapted:</p>{{ category.poses[route.params.id].sanskrit_name_adapted }}</li>
            <li><p>Translation:</p>{{ category.poses[route.params.id].translation_name }}</li>
            <li><p>Description :</p>{{ category.poses[route.params.id].pose_description }}</li>
            <li><p>Pose Benefit :</p>{{ category.poses[route.params.id].pose_benefits }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>

*{
    list-style:none;
}


</style>
