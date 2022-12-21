import client from '../../client';

/**
 * Search for products matching query.
 */
export async function searchProducts(query: string, page?: number) {
  const products = await client.products.list({
    search: query,
    limit: 16,
    page: page || 1,
  });
  return products;
}
