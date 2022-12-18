import { ProductQuery } from 'swell-js';
import client from '../../client';

/**
 * Get all products with filters.
 * TODO: Enable pagination.
 */
async function getAllProducts(filter: ProductQuery) {
  const products = await client.products.list(filter);
  return products;
}

export default getAllProducts;
