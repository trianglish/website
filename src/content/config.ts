import { z, defineCollection } from "astro:content";

export const collections = {
  employees: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        name: z.string(),
        description: z.string(),
        profile: image(),
        link: z.string(),
      }),
  }),
  services: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        id: z.number(),
        name1: z.string(),
        name2: z.string(),
        backgroundStyling: z.string(),
        arrow: z.string(),
        link: z.string(),
        image: z.string(),
      }),
  }),
};
