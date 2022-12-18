import { Box } from '@chakra-ui/react';
import React from 'react';

/**
 * Annoying wrapper component to create a simple container with border hover
 * effects made with box-shadow...since Safari can't do anything right. -_-
 */
const IndicatorBox = (props: { children: React.ReactNode }) => {
  return (
    <Box
      position='relative'
      display='flex'
      placeItems='center'
      cursor='pointer'
      boxShadow='0 0 0 1px var(--chakra-colors-gray-300) inset'
      transition='box-shadow 200ms ease-in-out'
      h={10}
      px={3}
      // Create 'thicker' border with pseudo element that animates on opacity.
      _after={{
        content: '""',
        position: 'absolute',
        top: '1px',
        left: '1px',
        width: 'calc(100% - 2px)',
        height: 'calc(100% - 2px)',
        opacity: 0,
        boxShadow: '0 0 0 1px black inset',
        transition: 'opacity 200ms ease-in-out',
      }}
      _hover={{
        boxShadow: '0 0 0 1px black inset',
        transition: 'box-shadow 200ms ease-in-out',
        _after: {
          opacity: 1,
          transition: 'opacity 200ms ease-in-out',
        },
      }}
    >
      {props.children}
    </Box>
  );
};

export default IndicatorBox;
