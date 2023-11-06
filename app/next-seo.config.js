// next-seo.config.js

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  openGraph: {
    type: "website",
    site_name: "sufian mustafa",
  },
  // Add additional schemas for specific pages
  additionalLinkTags: [
    {
      rel: "schema.doi",
      href: "https://doi.org/10.xxxx/example-doi",
    },
  ],
};
