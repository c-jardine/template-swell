import { Box, Button, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { FaMinus } from '@react-icons/all-files/fa/FaMinus';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface QuantityProps {
  maxQuantity: number;
  quantity: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Renders an input box and buttons to adjust the quantity of product to be
 * added to the cart.
 */
const Quantity = (props: QuantityProps) => {
  const [increaseDisabled, setIncreaseDisabled] =
    React.useState<boolean>(false);
  const [decreaseDisabled, setDecreaseDisabled] =
    React.useState<boolean>(false);

  const { register, setValue, watch } = useFormContext();

  /**
   * Handle quantity change when pressing the decrease button.
   */
  const _decreaseQuantity = () => {
    const quantity = parseInt(watch('quantity'));
    if (quantity > 1) {
      setValue('quantity', quantity - 1);
    }
  };

  /**
   * Handle quantity change when pressing the increase button.
   */
  const _increaseQuantity = () => {
    const quantity = parseInt(watch('quantity'));
    if (quantity < props.maxQuantity) {
      setValue('quantity', quantity + 1);
    }
  };

  /**
   * Handle quantity change when typing in the input box.
   */
  const _handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Make sure to convert it to an int!
    const value = parseInt(e.target.value);
    if (value < 1) {
      setValue('quantity', 1);
    } else if (value > props.maxQuantity) {
      setValue('quantity', props.maxQuantity);
    } else {
      setValue('quantity', e.target.value);
    }
  };

  /**
   * Handle disabled state of quantity change buttons.
   */
  React.useEffect(() => {
    const quantity = parseInt(watch('quantity'));
    quantity <= 1 ? setDecreaseDisabled(true) : setDecreaseDisabled(false);
    quantity >= props.maxQuantity
      ? setIncreaseDisabled(true)
      : setIncreaseDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.maxQuantity, watch('quantity')]);

  return (
    <Stack>
      <Text textStyle='sectionLabel'>Quantity</Text>
      <Flex gap={2}>
        <Box onClick={_decreaseQuantity}>
          <Button
            variant='none'
            className='indicator'
            boxSize={10}
            cursor={decreaseDisabled ? 'not-allowed' : 'pointer'}
            justifyContent='center'
            alignItems='center'
          >
            <Icon
              as={FaMinus}
              w={2}
              h={2}
              color={decreaseDisabled ? 'gray.300' : 'black'}
            />
          </Button>
        </Box>
        <Input
          {...register('quantity', { onChange: _handleChangeQuantity })}
          w={12}
          fontSize='sm'
          textAlign='center'
          type='number'
        />
        <Button variant='unstyled' onClick={_increaseQuantity}>
          <Flex
            className='indicator'
            boxSize={10}
            cursor={increaseDisabled ? 'not-allowed' : 'pointer'}
            justifyContent='center'
            alignItems='center'
          >
            <Icon
              as={FaPlus}
              w={2}
              h={2}
              color={increaseDisabled ? 'gray.300' : 'black'}
            />
          </Flex>
        </Button>
      </Flex>
    </Stack>
  );
};
export default Quantity;
