<template>
  <div>
    <NuxtLink to="/">GO TO HOME </NuxtLink>
    <div>POST{{ post }}</div>
    {{ pending }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { fetchPost } = usePost();

const { data, pending } = await useAsyncData("fetchPost", () =>
  fetchPost({ slug: route.params.slug })
);

const post = useState("post", () => data.value);

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
