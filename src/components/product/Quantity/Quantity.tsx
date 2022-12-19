import { Box, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { FaMinus } from '@react-icons/all-files/fa/FaMinus';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import React from 'react';

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

  /**
   * Handle quantity change when pressing the decrease button.
   */
  const _decreaseQuantity = () => {
    if (props.quantity > 1) {
      props.onChange(props.quantity - 1);
    }
  };

  /**
   * Handle quantity change when pressing the increase button.
   */
  const _increaseQuantity = () => {
    if (props.quantity < props.maxQuantity) {
      props.onChange(props.quantity + 1);
    }
  };

  /**
   * Handle quantity change when typing in the input box.
   */
  const _handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Make sure to convert it to an int!
    const value = parseInt(e.target.value);
    if (value < 0) {
      props.onChange(1);
    } else if (value > props.maxQuantity) {
      props.onChange(props.maxQuantity);
    } else {
      props.onChange(parseInt(e.target.value));
    }
  };

  /**
   * Handle disabled state of quantity change buttons.
   */
  React.useEffect(() => {
    props.quantity === 1
      ? setDecreaseDisabled(true)
      : setDecreaseDisabled(false);
    props.quantity === props.maxQuantity
      ? setIncreaseDisabled(true)
      : setIncreaseDisabled(false);
  }, [props.maxQuantity, props.quantity]);

  return (
    <Stack>
      <Text textStyle='sectionLabel'>Quantity</Text>
      <Flex gap={2}>
        <Box onClick={_decreaseQuantity}>
          <Flex
            className='indicator'
            boxSize={10}
            cursor='pointer'
            justifyContent='center'
            alignItems='center'
          >
            <Icon
              as={FaMinus}
              w={2}
              h={2}
              color={props.quantity === 1 ? 'gray.300' : 'black'}
            />
          </Flex>
        </Box>
        <Input
          w={12}
          fontSize='sm'
          textAlign='center'
          type='number'
          value={props.quantity}
          onChange={_handleChangeQuantity}
        />
        <Box onClick={_increaseQuantity}>
          <Flex
            className='indicator'
            boxSize={10}
            cursor='pointer'
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
        </Box>
      </Flex>
    </Stack>
  );
};
export default Quantity;
