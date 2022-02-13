<template>
  <div>
    <NuxtLink to="/">GO TO HOME </NuxtLink>
    <div v-if="post">POST{{ post }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { fetchPost, post } = usePost();
await fetchPost({ slug: route.params.slug });

useMeta({
  title: post.value.title,
  meta: [
    {
      name: "description",
      content: post.value.title,
    },
  ],
  htmlAttrs: {
    class: "dark",
  },
});
</script>
