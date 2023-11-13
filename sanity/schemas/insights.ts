export default {
  name: 'post',
  type: 'document',
  title: 'Insight Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'postimg',
      type: 'image',
      title: 'postimg',
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
