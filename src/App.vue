<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <header class="mb-3 border-b">
    <TheNavigation />
  </header>

  <main>
    <RouterView />
  </main>
</template>
