import { defineField, defineType } from "sanity";
export default defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "toptext1",
      type: "string",
      title: "toptext1",
    }),
    defineField({
      name: "toptext2",
      type: "string",
      title: "toptext2",
    }),

    defineField({
      name: "projectimg1",
      type: "image",
      title: "projectimg1",
    }),
    defineField({
      name: "projectimg2",
      type: "image",
      title: "projectimg2",
    }),
    defineField({
      name: "link",
      type: "url",
      title: "link",
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
      ],
    }),
  ],
});
