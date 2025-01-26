import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        tags: z.array(z.string()).default([]),
      })
    })
  }
})