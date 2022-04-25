import * as prismicT from '@prismicio/types';

// custom type to fix 'never' type for data, issue referenced at https://github.com/prismicio/prismic-types/issues/1
export type ProjectListPageData = {
  title: prismicT.TitleField;
  description: prismicT.RichTextField;
  image: prismicT.ImageField;
  url: prismicT.FilledLinkToWebField;
  source: prismicT.FilledLinkToWebField;
};

export type LinkedProject = prismicT.RelationField<ProjectListPageData>;

// Build a type for each Custom Type
export type ProjectListPage = prismicT.PrismicDocument<{
  uid: string;
  title: prismicT.TitleField;
  project_list: prismicT.GroupField<{
    project: prismicT.RelationField<ProjectListPageData>;
  }>;
}>;

// Build a type for each Custom Type
export type ProjectPage = prismicT.PrismicDocument<{
  uid: string;
  title: prismicT.TitleField;
  description: prismicT.RichTextField;
  image: prismicT.ImageField;
  url: prismicT.FilledLinkToWebField;
  source: prismicT.FilledLinkToWebField;
  features: prismicT.GroupField<{
    name: prismicT.KeyTextField;
  }>;
}>;
