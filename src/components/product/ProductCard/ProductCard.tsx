import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  chakra,
} from '@chakra-ui/react';
import { Fira_Sans_Condensed } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from 'swell-js';

/**
 * Import Google font.
 */
const fira = Fira_Sans_Condensed({ weight: ['400'], subsets: ['latin'] });

/**
 * Card display for the given product.
 */
const ProductCard = (props: Product) => {
  return (
    <Card key={props.id}>
      <CardHeader position='relative' h={72} w='full'>
        <Image
          src={props.images[0].file.url}
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </CardHeader>
      <CardBody textAlign='center'>
        <chakra.h3
          className={fira.className}
          fontSize='lg'
          color='gray.500'
          _hover={{ color: 'black' }}
          transition='200ms ease-in-out'
        >
          <Link href={`/products/${props.slug}`}>{props.name}</Link>
        </chakra.h3>
        <Flex gap={2} justifyContent='center'>
          <Text fontWeight='semibold'>
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(props.price)}
          </Text>
          <Text textDecoration='line-through' color='gray.500'>
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(props.price)}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default ProductCard;
