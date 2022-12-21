import { Stack, Text } from '@chakra-ui/react';
import { ProductOption } from 'swell-js';
import { ProductProps } from '../../../../lib/swell/types';
import { OptionCheckboxGroup } from '../../core';
import { ColorSelect } from '../ColorSelect';

interface ProductOptionsProps {
  product: ProductProps & {
    options: (ProductOption & { attributeId: string })[];
  };
}

const ProductOptions = (props: ProductOptionsProps) => {
  const { options } = props.product;

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} gap={4} flexWrap='wrap'>
      {options?.map((option) => (
        <Stack key={option.id}>
          <Text textStyle='sectionLabel'>{option.name}</Text>
          {option.name === 'Color' ? (
            <ColorSelect option={option} />
          ) : (
            <OptionCheckboxGroup option={option} />
          )}
        </Stack>
      ))}
    </Stack>
  );
};
export default ProductOptions;
