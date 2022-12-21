import { Box, Button, Container, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { searchProducts } from '../../../../lib/swell/queries';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState<string>('');

  const _handleSearch = async () => {
    const encodedQuery = encodeURIComponent(query);
    router.push(`/products/search/${encodedQuery}`)
  };
  return (
    <Box h={16} py={4}>
      <Container maxW='7xl' w='full'>
        <form onSubmit={_handleSearch}>
          <HStack>
            <Input
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              maxW='sm'
            />
            <Button type='submit' className='indicator' px={4}>
              <Text>Search</Text>
            </Button>
          </HStack>
        </form>
      </Container>
    </Box>
  );
};
export default Navbar;
