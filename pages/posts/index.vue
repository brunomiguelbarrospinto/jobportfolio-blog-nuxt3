<template>
  <div>
    <NuxtLink to="/">GO TO HOME </NuxtLink>
    POSTS
    <div :key="post.title" v-for="post in posts">
      {{ post }} <NuxtLink :to="`/posts/${post.slug}`">Go</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { fetchPosts, posts } = usePosts();
if (!posts.value) {
  await fetchPosts();
}
</script>
