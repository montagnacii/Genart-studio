<script setup lang="ts">
import type { Work } from '@/types/work'
import ImageCard from './ImageCard.vue'

defineProps<{
  works: Work[]
}>()
</script>

<template>
  <div class="card-grid">
    <ImageCard v-for="work in works" :key="work.id" :work="work" />
  </div>
</template>
