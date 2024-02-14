import { defineField, defineType } from "sanity";
export default defineType({
  name: "blog",
  type: "document",
  title: "Tutorial Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "blogimg",
      type: "image",
      title: "blogimg",
    }),
    defineField({
      name: "overview",
      type: "string",
      title: "Overview",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },

        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        },
        defineField({
          type: "code",
          name: "code",
        }),
      ],
    }),
  ],
});
