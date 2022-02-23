<template>
  <nav class="top-0 z-20 w-full bg-white py-5">
    <div
      class="flex items-center justify-between container mx-auto max-w-screen-xl"
    >
      <div><slot name="left-section"></slot></div>
      <div><slot name="right-section"></slot></div>
    </div>
  </nav>
</template>
