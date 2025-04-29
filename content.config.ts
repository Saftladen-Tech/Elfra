import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "*.md",
    }),
    courses: defineCollection({
      type: "data",
      source: "courses/**/*.yml",
      schema: z.object({
        title: z.string(),
        topic: z.string(),
        published: z.string(),
      }),
    }),
  },
});
