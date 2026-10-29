<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ImageGrid from '../components/shared/ImageGrid.vue'
import TagFilter from '../components/shared/TagFilter.vue'
import { filterWorksByTag, getAllTags } from '../data/works'

const route = useRoute()
const tags = getAllTags()

const selectedTag = computed(() => {
  const tag = route.query.tag
  return typeof tag === 'string' ? tag : undefined
})

const visibleWorks = computed(() => filterWorksByTag(selectedTag.value))
</script>

<template>
  <section class="page-width">
    <p class="section-kicker">Gallery</p>
    <h1 class="section-title">作品庫</h1>
    <p class="section-copy">
      用 Tag 篩選作品。資料寫在專案裡的靜態清單，沒有資料庫，也沒有上傳功能。
    </p>
    <TagFilter :tags="tags" :selected-tag="selectedTag" />
    <p v-if="visibleWorks.length === 0" class="empty-state">這個 Tag 目前沒有作品。</p>
    <ImageGrid v-else :works="visibleWorks" />
  </section>
</template>
