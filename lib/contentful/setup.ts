import contentful, { type EntryFieldTypes } from "contentful";
import { AboutUsEntry, Researchers } from "./types";
import { Locale } from "@/constants";

export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.DEV
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: process.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getSiteDetails(lang: Locale) {
  const data = await contentfulClient.getEntry<AboutUsEntry>(
    "78xlLscGbAXaUEcs8IrbkF",
    { locale: lang }
  );
  return data;
}

export async function getResearchers(lang: Locale) {
  const data = await contentfulClient.getEntries<Researchers>({
    content_type: "kutatok",
    locale: lang,
  });
  return data;
}
