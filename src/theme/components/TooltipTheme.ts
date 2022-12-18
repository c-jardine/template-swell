import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import gudea from '../../../lib/fonts/gudea';

const baseStyle = {
  bg: 'white',
  color: 'black',
  fontFamily: gudea.style.fontFamily,
  px: 3,
  borderWidth: '1px',
  borderColor: 'gray.300',
  shadow: 'none',
};

const TooltipTheme = defineStyleConfig({
  baseStyle,
});

export default TooltipTheme;
