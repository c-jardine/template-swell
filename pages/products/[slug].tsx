import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  chakra,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import { Product } from 'swell-js';
import Font from '../../lib/fonts';
import { formatCurrency } from '../../lib/helpers';
import { getAllProducts, getProductBySlug } from '../../lib/swell/queries';
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { IndicatorBox } from '../../src/components/core';

interface ProductPageProps {
  product: Product;
}

interface ProductGetStaticPropsContext extends GetStaticPropsContext {
  params: {
    slug: string;
  };
}

/**
 * Build the static paths to products.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await getAllProducts();
  const slugs = results.map((result) => {
    return { params: { slug: result.slug } };
  });

  return {
    paths: [...slugs],
    fallback: false,
  };
};

/**
 * Get the product with the specified slug.
 */
export const getStaticProps = async (context: ProductGetStaticPropsContext) => {
  const product = await getProductBySlug(context.params.slug);

  return { props: { product } };
};

/**
 * The main page component.
 */
const ProductPage: NextPage<ProductPageProps> = (props) => {
  const { product } = props;
  return (
    <Container as={Stack} spacing={16} maxW='6xl' w='full'>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
        <Box>
          <Box position='relative' w='full' minH={400}>
            <Image
              src={product.images[0].file.url}
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
        <Box>
          <Stack spacing={4}>
            <Flex gap={2} alignItems='center' fontSize='sm'>
              <chakra.span textStyle='sectionLabel'>Product Code</chakra.span>{' '}
              <chakra.span>{product.sku}</chakra.span>
            </Flex>
            <Text as='h1' className={Font.Fira.className} fontSize='4xl'>
              {product.name}
            </Text>
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
                        {Math.round(
                          (1 - product.price / product.origPrice) * 100
                        )}
                        % off!
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
            <HStack>
              <Button variant='primary'>Add to cart</Button>
              <Tooltip label='Add to wishlist' fontSize='sm'>
                <Box>
                  <IndicatorBox>
                    <Icon as={FaHeart} />
                  </IndicatorBox>
                </Box>
              </Tooltip>
            </HStack>
          </Stack>
        </Box>
      </SimpleGrid>
      <Divider />
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} maxW='7xl' mx='auto'>
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
    </Container>
  );
};

export default ProductPage;
