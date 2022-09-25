import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = ['Mulish', 'serif'].join(',');

const typography = {
  fontFamily: FONT_PRIMARY,
  fontSize: 13,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    // fontSize: pxToRem(18),
    fontSize: pxToRem(17),
    // ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 18 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    // fontSize: pxToRem(17),
    fontSize: pxToRem(16),
    // ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    ...responsiveFontSizes({ sm: 15, md: 15, lg: 15 }),
  },
  subtitle1: {
    // fontWeight: 600,
    // lineHeight: 1.5,
    // fontSize: pxToRem(16),
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  subtitle2: {
    // fontWeight: 600,
    // lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    fontWeight: 500,
    lineHeight: 20 / 14,
    fontSize: pxToRem(13),
  },
  body1: {
    // lineHeight: 1.5,
    // fontSize: pxToRem(16),
    lineHeight: 1.22,
    fontSize: pxToRem(13),
  },
  body2: {
    // lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    fontSize: pxToRem(11),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
} as const;

export default typography;
