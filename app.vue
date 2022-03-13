<template>
  <CommonNavbar class="sticky">
    <template #left-section>
      <div class="relative">
        <img :src="'logo.png'" class="w-44" />
        <div
          class="text-xs font-bold uppercase bg-blue-500 px-2 py-1 text-white absolute -right-6 -rotate-12 top-6"
        >
          Blog
        </div>
      </div>
    </template>
    <template #right-section>
      <NuxtLink
        class="ml-6 text-gray-800 font-semibold"
        :key="'nav-link-' + link.to"
        v-for="link in links"
        :to="'/'"
      >
        {{ link.text }}
      </NuxtLink>
    </template>
  </CommonNavbar>
  <NuxtPage />
</template>
<script setup lang="ts">
const links = [
  {
    text: "Inicio",
    to: "/",
  },
  {
    text: "Acerca de mi",
    to: "/",
  },
  {
    text: "Contacto",
    to: "/",
  },
];
</script>
