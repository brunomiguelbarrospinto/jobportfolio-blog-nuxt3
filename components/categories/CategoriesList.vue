<template>
  <div class="flex flex-wrap">
    <router-link
      :key="category.title"
      v-for="category in categories"
      :to="`/category/${category.slug}`"
      class="mr-2 mb-2"
    >
      <CommonTag :title="category.title" :backgroundColor="category.color" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
const { fetchCategories, categories } = useCategories();
if (!categories.value) {
  await fetchCategories();
}
</script>
