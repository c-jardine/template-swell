import { Container, Divider, SimpleGrid, Stack } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import { getAllProducts, getProductBySlug } from '../../lib/swell/queries';
import { ProductProps } from '../../lib/swell/types';
import {
  ProductCarousel,
  ProductDescription,
  ProductSidebar,
} from '../../src/components';

interface ProductPageProps {
  product: ProductProps;
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
  const [quantity, setQuantity] = React.useState<number>(1);

  const detailsProps = {
    quantity,
    setQuantity,
    product,
  };

  return (
    <Container as={Stack} spacing={16} maxW='6xl' w='full'>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
        <ProductCarousel product={product} />
        <ProductSidebar {...detailsProps} />
      </SimpleGrid>
      <Divider />
      <ProductDescription product={product} />
    </Container>
  );
};

export default ProductPage;
