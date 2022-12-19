import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
  chakra,
} from '@chakra-ui/react';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt';
import Font from '../../../../lib/fonts';
import { formatCurrency } from '../../../../lib/helpers';
import { getAvailability } from '../../../../lib/swell/helpers';
import { ProductProps } from '../../../../lib/swell/types';
import { IndicatorBox } from '../../core';
import { Quantity } from '../Quantity';
import { ProductOptions } from '../ProductOptions';

/**
 * Renders the products details and purchasing options.
 */
const ProductSidebar = (props: {
  product: ProductProps;
  quantity: number;
  setQuantity: any;
}) => {
  const { product, quantity, setQuantity } = props;
  const isAvailable = product.stockStatus !== 'out_of_stock';

  return (
    <Box>
      <Stack spacing={4}>
        <Flex gap={2} alignItems='center' fontSize='sm'>
          <chakra.span textStyle='sectionLabel'>Product Code</chakra.span>{' '}
          <chakra.span>{product.sku}</chakra.span>
        </Flex>
        <Stack>
          <Text as='h1' className={Font.Fira.className} fontSize='4xl'>
            {product.name}
          </Text>
          <Flex gap={2} alignItems='center' fontSize='sm'>
            <chakra.span textStyle='sectionLabel'>Availability</chakra.span>{' '}
            <chakra.span>{getAvailability(product)}</chakra.span>
          </Flex>
        </Stack>
        <Divider />
        <HStack justifyContent='space-between'>
          <Box>
            <Text textStyle='sectionLabel'>Price</Text>
            <Flex gap={2} textAlign='center'>
              <Text>{formatCurrency(product.price)}</Text>
              {product.origPrice && (
                <Flex gap={2} alignItems='center' color='gray.500'>
                  <Text textDecoration='line-through'>
                    {formatCurrency(product.origPrice)}
                  </Text>
                  <Text>
                    {Math.round((1 - product.price / product.origPrice) * 100)}%
                    off!
                  </Text>
                </Flex>
              )}
            </Flex>
          </Box>
          <Tooltip label='Share with friends' fontSize='sm'>
            <Box>
              <IndicatorBox>
                <Icon as={FaShareAlt} />
              </IndicatorBox>
            </Box>
          </Tooltip>
        </HStack>
        <Divider />
        <Stack spacing={8}>
          <Flex gap={4} flexWrap='wrap'>
            <Quantity
              quantity={quantity}
              onChange={setQuantity}
              maxQuantity={product.content.maxQuantity}
            />
            <ProductOptions product={product} />
          </Flex>
          <HStack>
            <Button variant='primary' disabled={!isAvailable}>
              {isAvailable ? 'Add to cart' : 'Out of stock'}
            </Button>
            <Tooltip label='Add to wishlist' fontSize='sm'>
              <Box>
                <IndicatorBox>
                  <Icon as={FaHeart} />
                </IndicatorBox>
              </Box>
            </Tooltip>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ProductSidebar;
