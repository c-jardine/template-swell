import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  chakra,
} from '@chakra-ui/react';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import React from 'react';
import { ProductOptionValue } from 'swell-js';
import { Checkbox } from '../../core/Checkbox';

interface ColorSelectProps {
  items: ProductOptionValue[];
}

/**
 * Renders a dropdown select menu display color options. Since Chakra-UI's
 * Select component uses the native selector, we mock its behavior with the
 * Menu component so it can be styled to match the app.
 */
const ColorSelect = (props: ColorSelectProps) => {
  const [color, setColor] = React.useState<string>('Color');

  const _handleClick = (value: string) => {
    setColor(value);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='unstyled'
        className='indicator'
        w='fit-content'
        rounded='none'
        cursor='pointer'
      >
        <Flex alignItems='center' gap={4} px={3}>
          <chakra.span fontWeight='normal'>{color}</chakra.span>{' '}
          <Icon as={FaChevronDown} w={2} h={2} />
        </Flex>
      </MenuButton>
      <MenuList py={0} rounded='none' shadow='none' borderColor='gray.300'>
        {props.items.map((item) => (
          <MenuItem key={item.id} onClick={() => _handleClick(item.name)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default ColorSelect;
