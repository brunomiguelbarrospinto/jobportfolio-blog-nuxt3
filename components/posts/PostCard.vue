<template>
  <div
    class="w-full bg-white flex p-4 rounded-md shadow hover:shadow-lg transition-shadow"
  >
    <div class="aspect-square w-56 mr-4">
      <img :src="post.mainImage" class="object-cover w-full h-full" />
    </div>
    <div>
      <div class="mb-4">
        <router-link
          :key="post.slug + category.title"
          v-for="category in post.categories"
          :to="`/category/${category.slug}`"
          class="mr-2"
        >
          <CommonTag
            :title="category.title"
            :backgroundColor="category.color"
          />
        </router-link>
      </div>
      <router-link
        :to="`/posts/${post.slug}`"
        class="text-xl font-bold text-gray-700 hover:underline"
      >
        {{ post.title }}
      </router-link>
      <div class="flex items-center mt-4">
        <div class="w-14">
          <img :src="post.author.image" class="rounded-full mx-auto" />
        </div>
        <div class="ml-4">
          <div class="mb-1 font-semibold text-gray-600">
            {{ post.author.name }}
          </div>
          <div class="text-gray-500 font-medium text-sm">
            {{ post.publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  post: Object,
});
</script>
