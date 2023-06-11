import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getThemeTokens } from '@src/theme/theme';
import { useMemo } from 'react';
import { useDarkMode } from 'usehooks-ts';

type Props = {
  children: React.ReactElement;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  const theme = useMemo(() => {
    return createTheme(getThemeTokens(isDarkMode ? 'dark' : 'light'));

    // const themeCreate = createTheme(getDesignTokens(mode));
    // return deepmerge(themeCreate, getThemedComponents(themeCreate));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
