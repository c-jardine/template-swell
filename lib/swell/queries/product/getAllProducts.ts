import client from '../../client';

export async function getAllProductsSlugs() {
  const products = await client.products.list({});
  return products;
}

/**
 * Get all products.
 */
export async function getAllProducts(page?: number) {
  const products = await client.products.list({
    limit: 16,
    page: page || 1,
  });
  return products;
}
