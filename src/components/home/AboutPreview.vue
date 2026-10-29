<template>
  <section class="section">
    <p class="section-kicker">About</p>
    <h2 class="section-title">關於我</h2>
    <p class="section-copy">
      我用 Vue 做這個網站，練習把個人介紹和生成藝術作品放在同一個地方。目標是讓履歷上的連結打開後，就能看懂我在學什麼、做過什麼。
    </p>
    <ul class="skill-list" aria-label="技能">
      <li>Vue 3</li>
      <li>TypeScript</li>
      <li>Vite</li>
      <li>Vue Router</li>
    </ul>
    <div class="button-row">
      <RouterLink class="button button-secondary" to="/about">閱讀更多</RouterLink>
    </div>
  </section>
</template>
