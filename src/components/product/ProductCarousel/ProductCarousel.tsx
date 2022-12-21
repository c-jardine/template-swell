import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import { ProductProps } from '../../../../lib/swell/types';
import { getImage } from '../../../../lib/swell/helpers';

interface ProductCarouselProps {
  product: ProductProps;
}

/**
 * Renders a carousel of the products images.
 */
const ProductCarousel = (props: ProductCarouselProps) => {
  const { product } = props;

  return (
    <Box position='relative' w='full' minH={400}>
      <Image
        src={getImage(product, 0)}
        alt=''
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
};
export default ProductCarousel;
