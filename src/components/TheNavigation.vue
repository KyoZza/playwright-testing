<script setup lang="ts">
import { capitalize, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => router.getRoutes())
</script>

<template>
  <nav class="flex gap-4 py-2">
    <RouterLink
      v-for="{ path, name } in routes"
      :key="name"
      :to="path"
      :data-testid="`nav-item-${name?.toString()}`"
      class="text-gray-600 hover:text-teal-500 font-medium text-lg"
      active-class="text-teal-600"
    >
      {{ capitalize(name?.toString() || '') }}
    </RouterLink>
  </nav>
</template>
