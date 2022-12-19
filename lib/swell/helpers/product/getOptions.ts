import { ProductProps } from '../../types';

const getOptions = (product: ProductProps) => {
  const { options } = product;

  const optionsArray = options?.map((option) => {
    return { name: option.name, variants: option.values };
  });
  return optionsArray;
};

export default getOptions;
