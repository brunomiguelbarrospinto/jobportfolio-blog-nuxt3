<template>
  <CommonNavbar class="sticky">
    <template #left-section> Logo </template>
    <template #right-section>
      <NuxtLink
        class="ml-6 text-slate-500 font-semibold"
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
