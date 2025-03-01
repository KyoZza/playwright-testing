<script setup lang="ts">
import VButton from '@/components/button'
import VInputText from '@/components/inputText'
import VPage from '@/components/page'
import { ref } from 'vue'

const name = ref('')
const greeting = ref('')

const onSubmit = () => {
  greeting.value = `Hello, ${name.value}!`
}
</script>

<template>
  <VPage title="Home">
    <div class="flex flex-col gap-4">
      <form class="flex gap-2" @submit.prevent="onSubmit">
        <VInputText v-model="name" placeholder="Enter your name" data-testid="form-input-name" />
        <VButton label="Greet" :disabled="!name" type="submit" data-testid="form-submit" />
      </form>

      <p data-testid="greeting-text">{{ greeting }}</p>
    </div>
  </VPage>
</template>
