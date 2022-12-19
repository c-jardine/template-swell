import { Box, Button } from '@chakra-ui/react';
import React from 'react';

interface CheckboxProps {
  children: React.ReactNode;
  disabled?: boolean;
  isToggled: boolean;
  onToggle: (isToggled: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <Box
      position='relative'
      display='flex'
      placeItems='center'
      h={10}
      px={4}
      fontWeight='normal'
      fontSize='sm'
      rounded='false'
      cursor={props.disabled ? 'not-allowed' : 'pointer'}
      boxShadow={
        props.isToggled
          ? '0 0 0 1px var(--chakra-colors-black) inset'
          : '0 0 0 1px var(--chakra-colors-gray-300) inset'
      }
      onClick={props.onToggle}
      // Create 'thicker' border with pseudo element that animates on opacity.
      _after={
        !props.disabled
          ? {
              content: '""',
              position: 'absolute',
              top: '1px',
              left: '1px',
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              opacity: props.isToggled ? 1 : 0,
              boxShadow: '0 0 0 1px black inset',
              transition: 'opacity 200ms ease-in-out',
            }
          : {}
      }
      _hover={
        !props.disabled
          ? {
              boxShadow: '0 0 0 1px black inset',
              transition: 'box-shadow 200ms ease-in-out',
              _after: {
                opacity: 1,
                transition: 'opacity 200ms ease-in-out',
              },
            }
          : {}
      }
      transition='box-shadow 200ms ease-in-out'
    >
      {props.children}
    </Box>
  );
};

export default Checkbox;
