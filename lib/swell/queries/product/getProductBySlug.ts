import client from '../../client';

/**
 * Get product by slug.
 */
async function getProductBySlug(slug: string) {
  const products = await client.products.get(slug);
  return products;
}

export default getProductBySlug;
