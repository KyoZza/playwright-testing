<script lang="ts" setup>
import type { ButtonEmits, ButtonProps } from './VButton.types'

const { variant = 'primary', size = 'md' } = defineProps<ButtonProps>()
defineEmits<ButtonEmits>()
</script>

<template>
  <button
    class="rounded-sm border"
    :class="{
      'bg-teal-600 border-teal-600 hover:bg-teal-500 hover:border-teal-500 text-white':
        variant === 'primary',
      'bg-slate-300 borderg-slate-300 hover:bg-slate-200 hover:border-slate-200 ':
        variant === 'secondary',
      'bg-emerald-600 border-emerald-600 hover:bg-emerald-500 hover:border-emerald-500 text-white':
        variant === 'success',
      'bg-rose-600 border-rose-600 hover:bg-rose-500 hover:border-rose-500 text-white bg-':
        variant === 'danger',
      'text-sm px-2 py-0.5': size === 'sm',
      'text-base px-3 py-1': size === 'md',
      'text-lg px-4 py-1.5': size === 'lg',
    }"
    @click="$emit('click')"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
