export type WorkLink = {
  label: string
  url: string
}

export type Work = {
  id: string
  title: string
  image: string
  tags: string[]
  summary: string
  featured: boolean
  externalLinks: WorkLink[]
}
