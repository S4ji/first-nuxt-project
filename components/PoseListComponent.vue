<template>

    <div>
        <ul>
          <li v-for="category in categories" >
            <NuxtLink :to="{ path: '/poses/' + category.id }">{{ category.category_name }}</NuxtLink>
          </li>
        </ul>    

    </div>
</template>

<script lang="ts" setup>
const { data: categories } = await useFetch('https://yoga-api-nzy4.onrender.com/v1/categories')
</script>

<style>


</style>