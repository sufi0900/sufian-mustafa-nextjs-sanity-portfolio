export default {
  name: 'blog',
  type: 'document',
  title: 'Tutorial Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'blogimg',
      type: 'image',
      title: 'blogimg',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },

        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
        {
          type: 'code',
        },
      ],
    },
  ],
}
