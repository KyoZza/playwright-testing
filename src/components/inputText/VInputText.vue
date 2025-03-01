<script lang="ts" setup>
import type { InputTextProps } from './VInputText.types'

const { size = 'md' } = defineProps<InputTextProps>()
const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    class="rounded-sm border border-gray-500 placeholder:text-sm placeholder:text-gray-500"
    :class="{
      'text-sm px-2 py-0.5': size === 'sm',
      'text-base px-3 py-1': size === 'md',
      'text-lg px-4 py-1.5': size === 'lg',
    }"
    :placeholder="placeholder"
  />
</template>
