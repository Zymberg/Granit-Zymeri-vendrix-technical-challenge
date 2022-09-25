import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    lightest: string;
    darker: string;
    darkest: string;
  }
  interface PaletteColor {
    lighter: string;
    lightest: string;
    darker: string;
    darkest: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// BRAND COLORS
// ! from original Vendrix logo
// const PRIMARY = {
//   lightest: '#DCFFFC',
//   lighter: '#97F7FF',
//   light: '#7DEBFF',
//   main: '#52D9FF',
//   dark: '#3BACDB',
//   darker: '#2983B7',
//   darkest: '#0F437A',
// };
// ! from Youssef's design
// const PRIMARY = {
//   lightest: '#E8FFF4',
//   lighter: '#BBFFEA',
//   light: '#AAFFED',
//   main: '#8EFFF2',
//   dark: '#67DBD8',
//   darker: '#47AFB7',
//   darkest: '#1B627A',
// };
// ! primary main as "Rich Cyan" from Youseff's design
const PRIMARY = {
  lightest: '#D0FDFA',
  lighter: '#73EEF7',
  light: '#4FD9F0',
  main: '#19BAE6',
  dark: '#1292C5',
  darker: '#0C6EA5',
  darkest: '#04386E',
};
// ! from original Figma style guide
// const SECONDARY = {
//   lightest: '#FEFDEB',
//   lighter: '#FAF6C4',
//   light: '#F6F0B3',
//   main: '#F1E89A',
//   dark: '#CFC470',
//   darker: '#ADA14D',
//   darkest: '#73671D',
// };
// ! secondary main as "construction orange" from Blaire's business card design
// const SECONDARY = {
//   lightest: '#FEEFD7',
//   lighter: '#F9BF89',
//   light: '#F4A46A',
//   main: '#EE7B3B',
//   dark: '#CC5A2B',
//   darker: '#AB3E1D',
//   darkest: '#72160B',
// };
// ! secondary main as "Home Depot orange"
const SECONDARY = {
  lightest: '#FFECCC',
  lighter: '#FFB566',
  light: '#FF983F',
  main: '#FF6700',
  dark: '#DB4B00',
  darker: '#B73400',
  darkest: '#7A1400',
};

// SEMANTIC COLORS
// ! from original Vendrix figma design
// const INFO = {
//   lightest: '#D7E9FE',
//   lighter: '#88B5FE',
//   light: '#6B9DFD',
//   main: '#3A77FC',
//   dark: '#2A5BD8',
//   darker: '#1D43B5',
//   darkest: '#0B1F78',
// };
// ! generated from primary main (https://colors.eva.design/)
const INFO = {
  lightest: '#DAF4FE',
  lighter: '#8FD4FE',
  light: '#74C1FD',
  main: '#46A4FC',
  dark: '#3380D8',
  darker: '#235FB5',
  darkest: '#0D2E78',
};
// ! from original Vendrix figma design
// const SUCCESS = {
//   lightest: '#D4FCDF',
//   lighter: '#7CEFB3',
//   light: '#59E0A7',
//   main: '#29cc97',
//   dark: '#1DAF8E',
//   darker: '#149282',
//   darkest: '#075B61',
// };
// ! generated from primary main (https://colors.eva.design/)
const SUCCESS = {
  lightest: '#DCFCD5',
  lighter: '#81F082',
  light: '#5FE16C',
  main: '#2FCE4F',
  dark: '#22B14C',
  darker: '#179448',
  darkest: '#09623D',
};
// ! from original Vendrix figma design
// const WARNING = {
//   lightest: '#FEF8CF',
//   lighter: '#FEE46F',
//   light: '#FEDA4B',
//   main: '#FEC810',
//   dark: '#DAA60B',
//   darker: '#B68608',
//   darkest: '#795303',
// };
// ! generated from primary main (https://colors.eva.design/)
const WARNING = {
  lightest: '#FDF9CF',
  lighter: '#F8E86E',
  light: '#F2DC4A',
  main: '#EACA12',
  dark: '#C9AA0D',
  darker: '#A88B09',
  darkest: '#705903',
};
// ! from original Vendrix figma design
// const ERROR = {
//   lightest: '#FEE7DB',
//   lighter: '#FEA694',
//   light: '#FD8479',
//   main: '#FD4D4D',
//   dark: '#D93846',
//   darker: '#B6263F',
//   darkest: '#790E33',
// };
// ! generated from primary main (https://colors.eva.design/)
const ERROR = {
  lightest: '#FFE9DB',
  lighter: '#FFAC93',
  light: '#FF8C78',
  main: '#FF584C',
  dark: '#DB373A',
  darker: '#B72634',
  darkest: '#7A0E2B',
};

// OTHER COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};
const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};
const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

// ----------------------------------------------------------------
const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;
