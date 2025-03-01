<script lang="ts" setup>
import type { InputTextProps } from './VInputText.types'

const { size = 'md' } = defineProps<InputTextProps>()
const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    class="rounded-sm border border-slate-500 placeholder:text-sm placeholder:text-slate-500 disabled:bg-slate-100"
    :class="{
      'text-sm px-2 py-0.5': size === 'sm',
      'text-base px-3 py-1': size === 'md',
      'text-lg px-4 py-1.5': size === 'lg',
    }"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>
