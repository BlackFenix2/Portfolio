import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import type { LinkResolverFunction } from '@prismicio/helpers';
import sm from '../../sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver: LinkResolverFunction = (doc) => {
  switch (doc.type) {
    case 'projects':
      return '/';
    case 'project-page':
      return `/Projects/${doc.uid}`;
    default:
      return null;
  }
};

// This factory function allows smooth preview setup
export function createClient(config = {} as any) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
