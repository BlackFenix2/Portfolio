import * as prismic from "@prismicio/client";

// custom type to fix 'never' type for data, issue referenced at https://github.com/prismicio/prismic-types/issues/1
export type ProjectListPageData = {
  title: prismic.TitleField;
  description: prismic.RichTextField;
  image: prismic.ImageField;
  url: prismic.FilledLinkToWebField;
  source: prismic.FilledLinkToWebField;
};

export type LinkedProject = prismic.ContentRelationshipField<
  string,
  string,
  ProjectListPageData
>;

// Build a type for each Custom Type
export type ProjectListPage = prismic.PrismicDocument & {
  data: {
    title: prismic.TitleField;
    project_list: Array<{
      project: LinkedProject;
    }>;
  };
};

// Build a type for each Custom Type
export type ProjectPage = prismic.PrismicDocument & {
  data: {
    title: prismic.TitleField;
    description: prismic.RichTextField;
    image: prismic.ImageField;
    url: prismic.FilledLinkToWebField;
    source: prismic.FilledLinkToWebField;
    features: Array<{
      icon: prismic.ImageField;
    }>;
  };
};
