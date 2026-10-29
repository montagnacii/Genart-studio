<script setup lang="ts">
import type { Work } from '@/types/work'
import TagChip from './TagChip.vue'

defineProps<{
  work: Work
}>()
</script>

<template>
  <article class="image-card">
    <RouterLink class="image-link" :to="{ name: 'work-detail', params: { id: work.id } }">
      <img :src="work.image" :alt="work.title" width="800" height="1000" />
      <h3>{{ work.title }}</h3>
    </RouterLink>
    <div class="card-tags">
      <TagChip
        v-for="tag in work.tags"
        :key="tag"
        :label="tag"
        :to="{ name: 'gallery', query: { tag } }"
      />
    </div>
  </article>
</template>

<style scoped>
.image-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.image-link {
  color: var(--color-heading);
}

.image-link img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: var(--color-background-mute);
}

.image-link h3 {
  margin-top: 0.75rem;
  font-size: 1.1rem;
}

.image-link:hover h3 {
  color: var(--color-accent);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
