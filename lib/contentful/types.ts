import { EntryFieldTypes } from "contentful";

export interface AboutUsEntry {
  contentTypeId: "aboutUs";
  fields: {
    shortDescription?: EntryFieldTypes.RichText;
    longDescription?: EntryFieldTypes.RichText;
    contact?: EntryFieldTypes.RichText;
  };
}

export interface Researchers {
  contentTypeId: "kutatok";
  fields: {
    name: EntryFieldTypes.Text;
    shortDescription?: EntryFieldTypes.Text;
    bio?: EntryFieldTypes.RichText;
    profilePicture?: EntryFieldTypes.AssetLink;
    slug: EntryFieldTypes.Text;
  };
}

export interface ProjectsEntry {
  contentTypeId: "projektek";
  fields: {
    title: EntryFieldTypes.Text;
    content?: EntryFieldTypes.RichText;
    date?: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Text;
  };
}

export interface NewsEntry {
  contentTypeId: "news";
  fields: {
    title: EntryFieldTypes.Text;
    content?: EntryFieldTypes.RichText;
    subtitle?: EntryFieldTypes.RichText;
    pubDate?: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Text;
  };
}
