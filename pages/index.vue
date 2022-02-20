<template>
  <IndexBanner />
  kokokokokoko
  <div class="container mx-auto">
    <div class="flex">
      <div class="w-2/3">
        <pre> {{ posts }}</pre>
      </div>

      <div class="w-1/3">
        Other things
        <hr />
        Other things
        <hr />
        Other things
        <hr />
        Other things
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/css/main.css";

const { fetchPosts, posts } = usePosts();
if (!posts.value) {
  await fetchPosts();
}
useMeta({
  title: "Jobportfolio - Blog",
  meta: [
    {
      name: "description",
      content: "Jobportfolio - Blog",
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
