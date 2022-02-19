<template>
  <div>
    <NuxtLink to="/posts">GO TO POSTS TEST Change </NuxtLink>
    {{ post }}
  </div>
</template>

<script setup lang="ts">
const { post } = usePost();

useMeta({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
});
</script>

<style>
.dark {
  background: black;
  color: white;
}
</style>
