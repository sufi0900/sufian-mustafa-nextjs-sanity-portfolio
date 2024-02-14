import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  type: "document",
  title: "Insight Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "postimg",
      type: "image",
      title: "postimg",
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
