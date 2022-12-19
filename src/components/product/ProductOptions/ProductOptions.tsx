import { Flex, Stack, Text } from '@chakra-ui/react';
import { getOptions } from '../../../../lib/swell/helpers';
import { ProductProps } from '../../../../lib/swell/types';
import { OptionChecklist } from '../../core';
import { ColorSelect } from '../ColorSelect';

interface ProductOptionsProps {
  product: ProductProps;
}

const ProductOptions = (props: ProductOptionsProps) => {
  const options = getOptions(props.product);

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} gap={4} flexWrap='wrap'>
      {options?.map((option) => (
        <Stack key={option.name}>
          <Text textStyle='sectionLabel'>{option.name}</Text>
          {option.name === 'Color' ? (
            <ColorSelect items={option.variants} />
          ) : (
            <OptionChecklist items={option.variants} />
          )}
        </Stack>
      ))}
    </Stack>
  );
};
export default ProductOptions;
