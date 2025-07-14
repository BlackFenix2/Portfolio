import * as prismic from "@prismicio/client";

// custom type to fix 'never' type for data, issue referenced at https://github.com/prismicio/prismic-types/issues/1
export type ProjectListPageData = {
  title: prismic.TitleField;
  description: prismic.RichTextField;
  image: prismic.ImageField;
  url: prismic.FilledLinkToWebField;
  source: prismic.FilledLinkToWebField;
};

export type LinkedProject =
  prismic.ContentRelationshipField<ProjectListPageData>;

// Build a type for each Custom Type
export type ProjectListPage = prismic.PrismicDocument<{
  uid: string;
  title: prismic.TitleField;
  project_list: prismic.GroupField<{
    project: prismic.ContentRelationshipField<ProjectListPageData>;
  }>;
}>;

// Build a type for each Custom Type
export type ProjectPage = prismic.PrismicDocument<{
  uid: string;
  title: prismic.TitleField;
  description: prismic.RichTextField;
  image: prismic.ImageField;
  url: prismic.FilledLinkToWebField;
  source: prismic.FilledLinkToWebField;
  features: prismic.GroupField<{
    icon: prismic.ImageField;
  }>;
}>;
