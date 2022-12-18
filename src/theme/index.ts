import { extendTheme } from '@chakra-ui/react';
import Font from '../../lib/fonts';
import { ButtonTheme, TooltipTheme } from './components';

const Fira = Font.Fira.style;

const theme = extendTheme({
  textStyles: {
    sectionLabel: {
      fontFamily: Fira.fontFamily,
      fontStyle: Fira.fontStyle,
      fontWeight: Fira.fontWeight,
      color: 'gray.500',
      fontSize: 'sm',
    },
    sectionLabelAlt: {
      fontFamily: Fira.fontFamily,
      fontStyle: Fira.fontStyle,
      fontWeight: Fira.fontWeight,
      fontSize: 'lg',
    },
  },
  components: {
    Button: ButtonTheme,
    Tooltip: TooltipTheme,
  },
});

export default theme;
