import { Flex, Stack, Text } from '@chakra-ui/react';
import { getOptions } from '../../../../lib/swell/helpers';
import { ProductProps } from '../../../../lib/swell/types';
import { IndicatorBox } from '../../core';
import { ColorSelect } from '../ColorSelect';

interface ProductOptionsProps {
  product: ProductProps;
}

const ProductOptions = (props: ProductOptionsProps) => {
  const options = getOptions(props.product);
  console.log(options);
  return (
    <Flex gap={4} flexWrap='wrap'>
      {options?.map((option) => (
        <Stack key={option.name}>
          <Text textStyle='sectionLabel'>{option.name}</Text>
          {option.name === 'Color' ? (
            <ColorSelect items={option.variants} />
          ) : (
            <Flex gap={2}>
              {option.variants.map((variant) => (
                <IndicatorBox key={variant.id}>{variant.name}</IndicatorBox>
              ))}
            </Flex>
          )}
        </Stack>
      ))}
    </Flex>
  );
};
export default ProductOptions;
