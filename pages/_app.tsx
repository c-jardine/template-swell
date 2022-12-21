import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Font from '../lib/fonts';
import theme from '../src/theme';
import '../styles/globals.css';
import { Navbar } from '../src/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box minH='100vh' py={28} className={Font.Gudea.className}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
