import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    courses: defineCollection({
      type: 'page',
      source: 'courses/**/*.md'
    })
  }
})
