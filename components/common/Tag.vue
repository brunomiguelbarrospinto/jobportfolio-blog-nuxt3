<template>
  <div
    :style="`background:${backgroundColor}`"
    class="px-2 py-1 rounded text-xs text-white font-semibold hover:underline inline"
  >
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  backgroundColor: String,
});
</script>
