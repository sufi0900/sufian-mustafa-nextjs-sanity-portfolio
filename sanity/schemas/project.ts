export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'toptext1',
      type: 'string',
      title: 'toptext1',
    },
    {
      name: 'toptext2',
      type: 'string',
      title: 'toptext2',
    },

    {
      name: 'projectimg1',
      type: 'image',
      title: 'projectimg1',
    },
    {
      name: 'projectimg2',
      type: 'image',
      title: 'projectimg2',
    },
    {
      name: 'link',
      type: 'url',
      title: 'link',
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
      ],
    },
  ],
}
