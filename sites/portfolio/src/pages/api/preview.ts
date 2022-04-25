import { linkResolver, createClient } from 'src/lib/prismicio';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 */
export default async (req, res) => {
  const client = createClient({ req });
  await setPreviewData({ req, res });
  await redirectToPreviewURL({ req, res, client, linkResolver });
};
