import { inputAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(inputAnatomy.keys);

const InputTheme: ComponentStyleConfig = helpers.defineMultiStyleConfig({
  variants: {
    outline: helpers.definePartsStyle({
      field: {
        position: 'relative',
        rounded: 'none',
        borderWidth: 0,
        boxShadow: '0 0 0 1px var(--chakra-colors-gray-300) inset',
        transition: 'box-shadow 200ms ease-in-out',
        _hover: {
          boxShadow: '0 0 0 2px black inset',
          transition: 'box-shadow 200ms ease-in-out',
        },
        _focus: {
          boxShadow: '0 0 0 2px black inset',
          transition: 'box-shadow 200ms ease-in-out',
        },
      },
    }),
  },
});

export default InputTheme;
