import { red } from '@mui/material/colors';
import { Poppins } from 'next/font/google';

export const font = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export type Mode = 'light' | 'dark';

export const getThemeTokens = (mode: Mode) => {
  const getModeColor = (light: string, dark: string) => (mode === 'light' ? light : dark);
  return {
    palette: {
      primary: {
        main: getModeColor('#556cd6', '#556cd6'),
      },
      secondary: {
        main: getModeColor('#19857b', '#19857b'),
      },
      error: {
        main: getModeColor(red.A400, red.A400),
      },
    },
    typography: {
      fontFamily: font.style.fontFamily,
    },
  };
};
