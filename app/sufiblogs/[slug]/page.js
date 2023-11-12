/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

import { client } from "../../lib/sanity";
import Head from "next/head";
import Script from "next/script";
import BlogCardDetail from "./code";
export const revalidate = false;
export const dynamic = "force-dynamic";
async function getData(slug) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: `${data.title}`,
    description: data.description,
    author: "Sufian Mustafa",
  };
}

export default async function MainComponent({ params }) {
  const data = await getData(params.slug);
  const canonicalUrl = `https://sufianmustafa.com/sufiblog/${params.slug}`;

  // Set title, description, and other SEO metadata
  const title = `${data.title}`;
  const description = data.description;
  return (
    <>
      {" "}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Script
        title={title}
        description={description}
        canonical={canonicalUrl}
      />{" "}
      <BlogCardDetail data={data} params={params} />
    </>
  );
}
