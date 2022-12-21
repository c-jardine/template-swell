import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ProductProps } from '../../../../lib/swell/types';

interface ProductDescriptionProps {
  product: ProductProps;
}

/**
 * Renders the product's details.
 */
const ProductDescription = (props: ProductDescriptionProps) => {
  const { product } = props;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
      <Stack spacing={4}>
        <Text as='h2' textStyle='sectionLabelAlt'>
          Description
        </Text>
        <Box
          opacity={0.5}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </Stack>
      <Stack spacing={4}>
        <Text as='h2' textStyle='sectionLabelAlt'>
          Fabric Details
        </Text>
        <Box
          opacity={0.5}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </Stack>
    </SimpleGrid>
  );
};
export default ProductDescription;
