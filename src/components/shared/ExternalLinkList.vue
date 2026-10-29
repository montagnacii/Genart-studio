<script setup lang="ts">
import type { WorkLink } from '@/types/work'

defineProps<{
  links: WorkLink[]
}>()
</script>

<template>
  <ul class="link-list">
    <li v-for="link in links" :key="link.url">
      <a :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
    </li>
  </ul>
</template>
