// schemas/heroImage.ts
import { defineType } from 'sanity';

export const heroImage = defineType({
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for screen readers',
    },
  ],
});
