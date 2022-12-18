import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  w: 'fit-content',
  rounded: 'none',
  bg: 'black',
  color: 'white',
  fontWeight: 'normal',
});

const secondary = defineStyle({
  w: 'fit-content',
  rounded: 'none',
  bg: 'transparent',
  color: 'black',
  fontWeight: 'normal',
  transition: '200ms ease-in-out',
  transform: 'translate3d(0,0,0)',
  WebkitAppearance: 'none',
  boxShadow: '0px 0px 0px 2px black inset',
  _hover: {
    boxShadow: '0px 0px 0px 3px black inset',
  },
});

const ButtonTheme = defineStyleConfig({
  variants: { primary, secondary },
});

export default ButtonTheme;
