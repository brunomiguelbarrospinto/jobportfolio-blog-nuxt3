<template>
  <div>
    <IndexBanner />
    <div class="container mx-auto max-w-screen-xl">
      <div class="grid grid-cols-2 gap-5">
        <div>
          <div
            :key="post.slug"
            v-for="post in posts"
            class="w-full bg-white flex p-4 rounded-md shadow hover:shadow-lg transition-shadow mt-10"
          >
            <div class="aspect-square w-56 mr-4">
              <img :src="post.mainImage" class="object-cover w-full h-full" />
            </div>
            <div>
              <div class="mb-5">
                <router-link
                  :key="post.slug + category.title"
                  v-for="category in post.categories"
                  :style="`background:${category.color}`"
                  :to="`/category/${category.slug}`"
                  class="px-3 py-2 rounded text-xs text-white mr-2 font-bold hover:underline"
                >
                  {{ category.title }}
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
        </div>

        <div>
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
