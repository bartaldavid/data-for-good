import { type EntryFieldTypes, createClient } from "contentful";
import { AboutUsEntry, NewsEntry, ProjectsEntry, Researchers } from "./types";
import { Locale } from "@/constants";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.DEV
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: process.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getSiteDetails(locale: string) {
  const data = await contentfulClient.getEntry<AboutUsEntry>(
    "78xlLscGbAXaUEcs8IrbkF",
    { locale }
  );
  return data;
}

export async function getResearchers(locale: string, slug?: string) {
  const data = await contentfulClient.getEntries<Researchers>({
    content_type: "kutatok",
    locale,
    ...(slug && { "fields.slug": slug }),
  });
  return data;
}

export async function getAsset(id: string) {
  return await contentfulClient.getAsset(id);
}

export async function getProjects(lang: string, slug?: string) {
  return await contentfulClient.getEntries<ProjectsEntry>({
    content_type: "projektek",
    locale: lang,
    ...(slug && { "fields.slug": slug }),
  });
}

export async function getNews(lang: string, slug?: string) {
  return await contentfulClient.getEntries<NewsEntry>({
    content_type: "news",
    locale: lang,
    ...(slug && { "fields.slug": slug }),
  });
}
