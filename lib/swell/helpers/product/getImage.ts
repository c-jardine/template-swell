import { Product } from 'swell-js';

const getImage = (product: Product, index: number) => {
  return product.images && product.images.length >= index
    ? product.images[index].file.url
    : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
};

export default getImage;
