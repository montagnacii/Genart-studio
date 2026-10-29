<script setup lang="ts">
import TagChip from './TagChip.vue'

defineProps<{
  tags: string[]
  selectedTag?: string
}>()
</script>

<template>
  <div class="tag-filter" aria-label="作品標籤篩選">
    <TagChip label="全部" :to="{ name: 'gallery' }" :active="!selectedTag" />
    <TagChip
      v-for="tag in tags"
      :key="tag"
      :label="tag"
      :to="{ name: 'gallery', query: { tag } }"
      :active="selectedTag === tag"
    />
  </div>
</template>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0 0.5rem;
}
</style>
