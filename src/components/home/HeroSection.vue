<template>
  <section class="hero" aria-label="Genart Studio 首頁主視覺">
    <div class="hero-atmosphere" aria-hidden="true"></div>
    <div class="hero-overlay" aria-hidden="true"></div>

    <div class="hero-content">
      <div class="hero-copy">
        <h1>
          <div>Genart Studio.</div>
          <span class="hero-muted">生成藝術</span>
        </h1>
        <p>把作品、分類與過程說明放在同一個地方，讓人把時間花在創作與實作，而不是東拼西湊。</p>
        <div class="hero-actions">
          <RouterLink class="button button-solid-light" to="/gallery">看作品</RouterLink>
          <RouterLink class="button liquid-glass" to="/about">關於我</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  width: 100%;
  height: 100svh;
  min-height: 36rem;
  overflow: hidden;
  background: var(--color-background);
}

.hero-atmosphere {
  position: absolute;
  inset: -12%;
  background:
    radial-gradient(ellipse 70% 55% at 18% 22%, rgba(196, 146, 74, 0.22), transparent 58%),
    radial-gradient(ellipse 50% 40% at 88% 8%, rgba(196, 146, 74, 0.1), transparent 55%),
    radial-gradient(ellipse 60% 50% at 70% 88%, rgba(36, 36, 36, 0.95), transparent 60%),
    var(--color-background-soft);
  animation: hero-drift 26s ease-in-out infinite;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(18, 18, 18, 0.28);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 7.5rem 1.25rem 4rem;
}

.hero-copy {
  max-width: 46rem;
  text-align: center;
}

.hero-copy h1 {
  margin-bottom: 0;
  color: var(--color-heading);
  font-size: clamp(2.5rem, 8vw, 4.75rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-muted {
  color: var(--color-text-muted);
}

.hero-copy p {
  max-width: 28rem;
  margin: 1.75rem auto 0;
  color: var(--color-text);
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.hero-actions .button {
  min-width: 8.5rem;
  border-radius: 999px;
  padding: 0.7rem 1.35rem;
}

@keyframes hero-drift {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.06) translate(2%, -1.5%);
  }
}

@media (max-width: 719px) {
  .hero-content {
    padding-top: 6.25rem;
  }

  .hero-copy p {
    margin-top: 1.25rem;
  }
}
</style>
