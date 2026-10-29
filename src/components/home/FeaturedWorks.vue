<script setup lang="ts">
import ImageGrid from '../shared/ImageGrid.vue'
import { getFeaturedWorks } from '../../data/works'

const featuredWorks = getFeaturedWorks()
</script>

<template>
  <section class="section">
    <p class="section-kicker">Selected works</p>
    <h2 class="section-title">精選作品</h2>
    <p class="section-copy">這三件來自同一份作品資料，點進去可看說明、Tag 與外部連結。</p>
    <ImageGrid :works="featuredWorks" />
    <div class="button-row"></div>
  </section>
</template>
