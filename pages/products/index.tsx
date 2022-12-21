import {
  Button,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Product } from 'swell-js';
import { getAllProducts } from '../../lib/swell/queries';
import { ProductCard } from '../../src/components';
import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';

interface ProductsPageProps {
  products: { results: Product[] };
}

/**
 * Get all products.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const products = await getAllProducts(query.page);

  return {
    props: { products },
  };
};

const ProductsPage: NextPage<ProductsPageProps> = (props) => {
  const router = useRouter();
  const _onPrevPage = (e) => {
    router.push(`/products?page=${parseInt(router.query.page) - 1}`);
  };
  const _onNextPage = (e) => {
    router.push(`/products?page=${parseInt(router.query.page) + 1}`);
  };
  const { products } = props;
  return (
    <Container maxW='8xl' w='full'>
      <Flex>
        <Button
          className='indicator'
          bg='white'
          _hover={{ bg: 'white' }}
          disabled={parseInt(router.query.page) === 1}
          onClick={_onPrevPage}
        >
          <Icon as={FaChevronLeft} />
        </Button>
        <Button
          className='indicator'
          bg='white'
          _hover={{ bg: 'white' }}
          onClick={_onNextPage}
        >
          <Icon as={FaChevronRight} />
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, lg: 3, xl: 4 }} gap={8}>
        {products.results?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default ProductsPage;
