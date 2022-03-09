<template>
  <div class="container mx-auto max-w-screen-xl">
    <br />
    <div class="grid grid-cols-2 gap-5">
      <div class="bg-white p-5">
        <h1 class="text-3xl font-extrabold leading-normal text-gray-800 mb-1">
          {{ post.title }}
        </h1>
        <div class="text-gray-500 font-medium text-md mb-4">
          {{ post.publishedAt }}
        </div>
        <img :src="post.mainImage" class="object-cover w-full" />
        <SanityBlocks :blocks="post.body" :serializers="serializers" />
        <pre>{{ post.body }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import { SanityBlocks } from "sanity-blocks-vue-component";

const { fetchPost, post } = usePost();
await fetchPost({ slug: route.params.slug });

const serializers = {
  types: {
    code: (props) => {
      const template = `
      <pre data-language="${props.language}">
        <code>${props.code}</code>
      </pre>
    `;

      return `<div v-html='${template}' />`;
    },
  },
};

useMeta({
  title: post.value.title,
  meta: [
    {
      name: "description",
      content: post.value.title,
    },
  ],
});
</script>
