import { type EntryFieldTypes, createClient } from "contentful";
import {
  AboutUsEntry,
  NewsEntry,
  ProjectsEntry,
  Researchers,
  TypeTeachingFields,
} from "./types";
import { Locale } from "@/constants";
import { cache } from "react";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.DEV
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: process.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export const getSiteDetails = cache(async (locale: string) => {
  const data = await contentfulClient.getEntry<AboutUsEntry>(
    "78xlLscGbAXaUEcs8IrbkF",
    { locale }
  );
  return data;
});

export const getResearchers = cache(async (locale: string, slug?: string) => {
  const data = await contentfulClient.getEntries<Researchers>({
    content_type: "kutatok",
    locale,
    ...(slug && { "fields.slug": slug }),
  });
  return data;
});

export const getAsset = cache(async (id: string) => {
  return await contentfulClient.getAsset(id);
});

export const getProjects = cache(async (lang: string, slug?: string) => {
  return await contentfulClient.getEntries<ProjectsEntry>({
    content_type: "projektek",
    locale: lang,
    ...(slug && { "fields.slug": slug }),
  });
});

export const getNews = cache(async (lang: string, slug?: string) => {
  return await contentfulClient.getEntries<NewsEntry>({
    content_type: "news",
    locale: lang,
    ...(slug && { "fields.slug": slug }),
  });
});

export const getTeachingPage = cache(async (lang: string, slug?: string) => {
  return await contentfulClient.getEntries<TypeTeachingFields>({
    content_type: "teaching",
    locale: lang,
    ...(slug && { "fields.slug": slug }),
  });
});
