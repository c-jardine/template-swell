import {
  Button,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { useRouter } from 'next/router';
import { searchProducts } from '../../../lib/swell/queries';
import { ProductCard } from '../../../src/components';

export const getServerSideProps = async (context) => {
  const decodedQuery = decodeURIComponent(context.query.query);
  const results = await searchProducts(decodedQuery, 1);

  return { props: { products: results, query: decodedQuery } };
};

const SearchResultsPage = (props) => {
  const router = useRouter();
  const { products, query } = props;
  const { page } = router.query;

  const _onPrevPage = (e) => {
    router.push(`/products?page=${parseInt(router.query.page) - 1}`);
  };
  const _onNextPage = (e) => {
    router.push(`/products?page=${parseInt(router.query.page) + 1}`);
  };
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
      <Text>Showing results for: {query}</Text>
      <SimpleGrid columns={{ base: 1, lg: 3, xl: 4 }} gap={8}>
        {products.results?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default SearchResultsPage;
