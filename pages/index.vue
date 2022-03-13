<template>
  <div>
    <IndexBanner />
    <div class="container mx-auto max-w-screen-xl">
      <div class="grid grid-cols-3 gap-14">
        <div class="mt-10 col-span-2" v-if="posts">
          <div
            class="text-2xl font-extrabold leading-normal text-gray-800 mb-6"
          >
            Ultimos posts
          </div>
          <PostsPostCard :post="post" :key="post.slug" v-for="post in posts" />
        </div>
        <div class="mt-10">
          <div
            class="text-2xl font-extrabold leading-normal text-gray-800 mb-6"
          >
            Categorias
          </div>
          <div
            class="w-full bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow"
          >
            <CategoriesList />
          </div>
        </div>
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
