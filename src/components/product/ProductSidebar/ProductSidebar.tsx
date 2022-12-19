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
import { FormProvider, useForm } from 'react-hook-form';
import { ProductOption } from 'swell-js';
import Font from '../../../../lib/fonts';
import { formatCurrency } from '../../../../lib/helpers';
import { getAvailability } from '../../../../lib/swell/helpers';
import { ProductProps } from '../../../../lib/swell/types';
import { ProductOptions } from '../ProductOptions';
import { Quantity } from '../Quantity';

/**
 * Declare props for the component.
 */
interface ProductSidebarProps {
  product: ProductProps & {
    options: (ProductOption & { attributeId: string })[];
  };
  quantity: number;
  setQuantity: any;
}

/**
 * Renders the products details and purchasing options.
 */
const ProductSidebar = (props: ProductSidebarProps) => {
  const { product, quantity, setQuantity } = props;
  const isAvailable = product.stockStatus !== 'out_of_stock';

  /**
   * Generate initial values for the options (uses the first option value).
   */
  const initialValues: { [x: string]: string | number } = { quantity: 1 };
  props.product.options?.forEach((option) => {
    initialValues[option.attributeId] = option.values[0].name;
  });

  /**
   * Configure react-hook-form.
   */
  const methods = useForm({ defaultValues: initialValues });

  /**
   * Handle form submission.
   */
  const onSubmit = (data: { quantity: number; [x: string]: string | number }) =>
    console.log(data);

  console.log(product.variants);

  return (
    <Box>
      <Stack spacing={4}>
        {/* Product code/sku */}
        <Flex gap={2} alignItems='center' fontSize='sm'>
          <chakra.span textStyle='sectionLabel'>Product Code</chakra.span>{' '}
          <chakra.span>{product.sku}</chakra.span>
        </Flex>
        {/* Product name and availability */}
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
          {/* Product price */}
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
          {/* Share button */}
          <Tooltip label='Share with friends' fontSize='sm'>
            <Flex
              className='indicator'
              boxSize={10}
              cursor='pointer'
              justifyContent='center'
              alignItems='center'
            >
              <Icon as={FaShareAlt} />
            </Flex>
          </Tooltip>
        </HStack>
        <Divider />
        {/* User options */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={8}>
              {/* Product options */}
              <ProductOptions product={product} />
              {/* Product quantity */}
              <Quantity
                quantity={quantity}
                onChange={setQuantity}
                maxQuantity={product.content.maxQuantity}
              />
              <HStack>
                {/* Add to cart */}
                <Button variant='primary' disabled={!isAvailable}>
                  {isAvailable ? 'Add to cart' : 'Out of stock'}
                </Button>
                {/* Add to wishlist */}
                <Tooltip label='Add to wishlist' fontSize='sm'>
                  <Box>
                    <Flex
                      className='indicator'
                      boxSize={10}
                      cursor='pointer'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Icon as={FaHeart} />
                    </Flex>
                  </Box>
                </Tooltip>
              </HStack>
            </Stack>
          </form>
        </FormProvider>
      </Stack>
    </Box>
  );
};
export default ProductSidebar;
