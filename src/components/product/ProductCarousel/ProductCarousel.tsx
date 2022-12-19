import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import { ProductProps } from '../../../../lib/swell/types';

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
        src={product.images[0].file.url}
        alt=''
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
};
export default ProductCarousel;
