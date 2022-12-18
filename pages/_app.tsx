import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box minH='100vh' py={28}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
