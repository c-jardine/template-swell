import { Container, SimpleGrid } from '@chakra-ui/react';
import { Product } from 'swell-js';
import { getAllProducts } from '../lib/swell/queries';
import { ProductCard } from '../src/components';

export default function Home({
  products,
}: {
  products: { results: Product[] };
}) {
  return (
    <Container maxW='8xl' w='full'>
      <SimpleGrid columns={{ base: 1, lg: 3, xl: 4 }}>
        {products.results?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}
