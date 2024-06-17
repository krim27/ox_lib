import { MantineThemeOverride } from '@mantine/core';
export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },

  colors: {
    dark: [
      '#C1C2C5', //[0]
      '#A6A7AB', //[1]
      '#909296', //[2]
      '#3b4c70', //[3]
      '#263961', //[4]
      '#1a2743', //[5]
      '#080c16', //[6]
      '#080c16', //[7]
      '#141517', //[8]
      '#101113', //[9]
    ],
  },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};