<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  label: string
  to?: RouteLocationRaw
  active?: boolean
}>()
</script>

<template>
  <RouterLink v-if="to" class="tag-chip" :class="{ active }" :to="to">
    {{ label }}
  </RouterLink>
  <span v-else class="tag-chip" :class="{ active }">{{ label }}</span>
</template>

<style scoped>
.tag-chip {
  display: inline-flex;
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.tag-chip:hover,
.tag-chip.active {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
