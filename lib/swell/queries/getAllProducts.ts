import client from '../client';

/**
 * Get all products.
 * TODO: Enable pagination.
 */
async function getAllProducts() {
  const products = await client.products.list({});
  return products;
}

export default getAllProducts;
