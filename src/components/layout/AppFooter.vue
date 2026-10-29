<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>Genart Studio</p>
      <p>個人頁面與作品展示網站（建置中）</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  width: min(var(--content-width), calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.25rem 0 1.75rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
</style>
