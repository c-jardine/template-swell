import { ProductProps } from '../../types';

/**
 * Get the availability status of a product.
 * @param product The product whose availability is being checked.
 * @returns A human-readable string showing the availability status.
 */
const getAvailability = (product: ProductProps) => {
  return product.stockStatus === 'out_of_stock' ? 'Out of stock' : 'In stock';
};

export default getAvailability;
