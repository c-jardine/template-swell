import { Product } from 'swell-js';

const getAvailability = (product: Product) => {
  return product.stockStatus === 'out_of_stock' ? 'Out of stock' : 'In stock';
};

export default getAvailability;
