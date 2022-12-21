import { Product } from 'swell-js';

export type ProductProps = Product & {
  stockStatus: 'out_of_stock' | 'in_stock';
  sku: string;
  origPrice: number;
};
