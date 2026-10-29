<template>
  <article class="about page-width">
    <p class="section-kicker">About</p>
    <h1 class="section-title">關於這個網站</h1>
    <p class="section-copy">
      Genart Studio 是一個做為展示前端作品的網站內容包含：個人介紹、圖片庫、Tag
      分類，以及作品的外部資料連結。
    </p>

    <section class="section about-block">
      <h2>簡介</h2>
      <p>
        這是一個 Vue 3 單頁網站。訪客可以從首頁認識我，再到 Gallery
        依標籤瀏覽作品，並在詳細頁查看說明與外部連結。
      </p>
    </section>

    <section class="section about-block">
      <h2>背景 / 學習方向</h2>
      <p>目前以前端實作為主，用這個專案練習版面、路由、靜態資料與之後部署到 Vercel 的流程。</p>
    </section>

    <section class="section about-block">
      <h2>技能</h2>
      <ul class="skill-list" aria-label="目前使用的技術">
        <li>Vue 3</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>HTML / CSS</li>
      </ul>
    </section>

    <RouterLink class="button button-secondary" to="/">回到首頁</RouterLink>
  </article>
</template>

<style scoped>
.about h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

.about-block {
  margin-bottom: 2.5rem;
}

.about-block h2 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.about-block p {
  max-width: 40rem;
  color: var(--color-text-muted);
}
</style>
