import type { Work } from '@/types/work'

export const works: Work[] = [
  {
    id: 'amber-orbit',
    title: 'Amber Orbit',
    image: '/works/amber-orbit.svg',
    tags: ['abstract', 'warm'],
    summary: '暖色環帶與緩慢的圓弧，模擬生成過程裡一層層疊上去的光。',
    featured: true,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
      { label: '生成藝術簡介', url: 'https://en.wikipedia.org/wiki/Generative_art' },
    ],
  },
  {
    id: 'dusk-grid',
    title: 'Dusk Grid',
    image: '/works/dusk-grid.svg',
    tags: ['geometric', 'city'],
    summary: '黃昏色的格子結構，用來練習把幾何形狀排成可閱讀的畫面。',
    featured: true,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
      { label: 'Vue 文件', url: 'https://vuejs.org/' },
    ],
  },
  {
    id: 'tide-field',
    title: 'Tide Field',
    image: '/works/tide-field.svg',
    tags: ['landscape', 'organic'],
    summary: '水平的色帶像潮汐線，之後可以換成真實渲染圖或照片。',
    featured: true,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
    ],
  },
  {
    id: 'signal-bloom',
    title: 'Signal Bloom',
    image: '/works/signal-bloom.svg',
    tags: ['abstract', 'glow'],
    summary: '中心亮點往外擴散，對應「訊號」與「開花」兩種 Tag 意象。',
    featured: false,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
      { label: 'Vite 文件', url: 'https://vite.dev/' },
    ],
  },
  {
    id: 'paper-fault',
    title: 'Paper Fault',
    image: '/works/paper-fault.svg',
    tags: ['texture', 'monochrome'],
    summary: '接近紙紋的裂縫與灰階，用來測試單色作品在深色畫廊裡的對比。',
    featured: false,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
    ],
  },
  {
    id: 'north-window',
    title: 'North Window',
    image: '/works/north-window.svg',
    tags: ['landscape', 'quiet'],
    summary: '一塊冷色窗景，連到外部資料時可以放原圖、提示詞或過程筆記。',
    featured: false,
    externalLinks: [
      { label: 'GitHub 專案', url: 'https://github.com/montagnacii/Genart-studio' },
      { label: '生成藝術簡介', url: 'https://en.wikipedia.org/wiki/Generative_art' },
    ],
  },
]

export function getFeaturedWorks(): Work[] {
  return works.filter((work) => work.featured)
}

export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id)
}

export function getAllTags(): string[] {
  return [...new Set(works.flatMap((work) => work.tags))].sort()
}

export function filterWorksByTag(tag: string | undefined): Work[] {
  if (!tag) {
    return works
  }

  return works.filter((work) => work.tags.includes(tag))
}
