<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ExternalLinkList from '../components/shared/ExternalLinkList.vue'
import TagChip from '../components/shared/TagChip.vue'
import { getWorkById } from '../data/works'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()

const work = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? getWorkById(id) : undefined
})
</script>

<template>
  <NotFoundView v-if="!work" />
  <article v-else class="detail page-width">
    <p class="section-kicker">Work</p>
    <h1 class="section-title">{{ work.title }}</h1>
    <img class="detail-image" :src="work.image" :alt="work.title" width="800" height="1000" />
    <p class="section-copy">{{ work.summary }}</p>
    <div class="detail-tags">
      <TagChip
        v-for="tag in work.tags"
        :key="tag"
        :label="tag"
        :to="{ name: 'gallery', query: { tag } }"
      />
    </div>
    <h2 class="detail-heading">外部連結</h2>
    <ExternalLinkList :links="work.externalLinks" />
    <div class="button-row">
      <RouterLink class="button button-secondary" to="/gallery">回到 Gallery</RouterLink>
    </div>
  </article>
</template>

<style scoped>
.detail-image {
  display: block;
  width: min(100%, 28rem);
  margin: 0 0 1.5rem;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: var(--color-background-mute);
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.25rem 0;
}

.detail-heading {
  margin-top: 0.5rem;
  font-size: 1.1rem;
}
</style>
