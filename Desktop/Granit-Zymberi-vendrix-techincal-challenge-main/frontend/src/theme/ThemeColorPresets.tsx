import { ReactNode, useMemo } from 'react';
// Components
import {
  ThemeProvider,
  createTheme,
  useTheme,
  ThemeOptions,
} from '@mui/material/styles';
// Theme
import componentsOverride from '../theme/overrides';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeColorPresets({ children }: Props) {
  const defaultTheme = useTheme();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
      },
      customShadows: {
        ...defaultTheme.customShadows,
      },
    }),
    [defaultTheme]
  );

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
