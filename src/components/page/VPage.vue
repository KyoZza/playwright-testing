<script setup lang="ts">
import VTitle from '../title'
import type { PageProps } from './VPage.types'

defineProps<PageProps>()
</script>

<template>
  <main>
    <VTitle :title="title" size="xl" tag="h1" data-testid="page-title" class="mb-6" />

    <slot />
  </main>
</template>
