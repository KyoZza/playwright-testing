<script lang="ts" setup>
import type { TitleProps } from './VTitle.types'

const { size = 'md', tag = 'h3' } = defineProps<TitleProps>()
</script>

<template>
  <component
    :is="tag"
    :class="{
      'text-lg font-medium': size === 'sm',
      'font-semibold': size !== 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
      'text-3xl': size === 'xl',
    }"
  >
    <slot>
      {{ title }}
    </slot>
  </component>
</template>
