import { ProductProps } from '../../types';

const getOptions = (product: ProductProps) => {
  const { options } = product;
  return options;
};

export default getOptions;
